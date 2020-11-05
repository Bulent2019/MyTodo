import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
// import TodoTable from './TodoTable';
import '../App.css';
import { AgGridReact } from 'ag-grid-react';
import React, { useRef, useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';




function Todolist() {
    const [todo, setTodo] = useState({desc: '', date: '', priority: ''});
    const [todos, setTodos] = useState([]);

    const [selectedDate, setDate] = useState(new Date());

    const gridRef = useRef();

    const inputChange = (event) => {
        todo.date = selectedDate.getDate() + "." + selectedDate.getMonth() + "." + selectedDate.getFullYear();
        setTodo({...todo, [event.target.name]: event.target.value});
    }

    // const handleDateChange = 

    const addTodo = () => {
        todo.date = selectedDate.getDate() + "." + selectedDate.getMonth() + "." + selectedDate.getFullYear();
        setTodos([todo, ...todos]);
        setTodo({desc: '', date: '', priority: ''});
    }
    
    const deleteTodo = () => {
        // setTodos(todos.filter((tods, index) => row !== index));
        if (gridRef.current.getSelectedNodes().length > 0){
            setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex));
        }
        else {
            alert('Select row first');
        }
    }

    const columns = [
        {headerName: 'Description', field: 'desc',      sortable: true, filter: true, floatingFilter: true},
        {headerName: 'Date',        field: 'date',      sortable: true, filter: true, floatingFilter: true},
        {headerName: 'Priority',    field: 'priority',  sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}
        }
    ]

    return (
        <div>
        
            <TextField style={{margin: 5}} label="Description" placeholder="Description" name="desc"     value={todo.desc}      onChange={inputChange}/>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker value={selectedDate} onChange={setDate}/>
            </MuiPickersUtilsProvider>
            
            {/* <TextField style={{margin: 5}} label="Date"        type="date"               name="date"     value = {todo.date}    onChange ={inputChange}/> */}
            
            <TextField style={{margin: 5}} label="Priority"    placeholder="Priority"    name="priority" value={todo.priority}  onChange={inputChange}/>

            {/* <input placeholder="Description" name="desc"     value={todo.desc}      onChange={inputChange}/>
            <input type="date"               name="date"     value = {todo.date}    onChange ={inputChange}/>
            <input placeholder="Priority"    name="priority" value={todo.priority}  onChange={inputChange} /> */}
            

            <Button size="small" style={{margin: 5}} variant="contained" color="primary" onClick={addTodo}>Add</Button>
            <Button size="small" style={{margin: 5}} variant="contained" color="secondary" onClick={deleteTodo}>Delete</Button>

            {/* <button onClick={addTodo}>Add</button>
            <button onClick={deleteTodo}>Delete</button> */}
            
            <div className="ag-theme-material" style={{height: '700px', width: '60%', margin: 'auto'}}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    columnDefs={columns}
                    animateRows={true}
                    rowData={todos}
                    rowSelection="single"
                />
            </div>

            {/* <TodoTable deleteTodo={deleteTodo} todos={todos}/> */}
                            
        </div>
    )
}

export default Todolist;