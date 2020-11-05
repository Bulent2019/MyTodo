import React from 'react';
import Todolist from './components/Todolist';
import './App.css';
import Welcome from './components/Welcome';
import Bye from './components/Bye';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab  from'@material-ui/core/Tab';

function App() {

    const[value, setValue] = React.useState('one');

    const inputChange = (event, value) => {
      setValue(value);
    }

  return (
    <div className="App">
      
       <AppBar position="static">
        <Toolbar>
          <Tabs value = {value} onChange={inputChange}>
            <Tab value ="one" label="Welcome"></Tab>
            <Tab value ="two" label="Todolist"></Tab>
            <Tab value ="three" label="Bye"></Tab>
          </Tabs>
          {/* <Typography variant="h6">
            TodoList
          </Typography> */}
        </Toolbar>
      </AppBar>
      {value === 'one' && <div><Welcome></Welcome></div>}
      {value === 'two' && <div><Todolist></Todolist></div>}
      {value === 'three' && <div><Bye></Bye></div>}
      
    </div>
  );
}



export default App;
