import './App.css';
import ReactDOM from 'react-dom';
import ToDoList from "./ToDoList";
import React, {useEffect, useState } from 'react';
function ToDoForm(props) {
const [ userInput, setUserInput ] = useState('');
const handleChange = (e) => {
    setUserInput(e.target.value);
    console.log(e.target.value);
}
const addTask = (userInput) => {
  let copy = [...props.toDoList];
  copy = [...copy, { id: props.toDoList.length + 1, task: userInput, complete: false }];
  props.demo(copy);
}
const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
}
  return(
    <>
<div>
<input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
{userInput.length>0?<button style={{margin: '10px'}} onClick={handleSubmit}>Submit</button >:<button style={{margin: '10px'}}>Submit</button>}
</div>
</>
  );
}
  export default ToDoForm;