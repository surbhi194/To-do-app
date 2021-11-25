import './App.css';
import React, { useState } from 'react';
// import addTask from "./ToDoList";
function ToDoForm({props}) {
const [ userInput, setUserInput ] = useState('');
const handleChange = (e) => {
    setUserInput(e.Target.value)
}
const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(userInput);
    setUserInput("");

}
  return(
    <>
<div>
<input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
{/* {props.copy.push({id: props.toDoList.length + 1, task: userInput, complete: false })} */}
<button style={{margin: '10px'}} onClick={handleSubmit}>Submit</button>
</div>
</>
  );
}
  export default ToDoForm;