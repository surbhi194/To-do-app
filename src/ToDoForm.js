import './App.css';
import ReactDOM from 'react-dom';
import ToDoList from "./ToDoList";
import React, {useEffect, useState } from 'react';
function ToDoForm(props) {
  const [toDoList, setToDoList] = useState("");
  useEffect(() => {
     console.log(props.toDoList);
     setToDoList(props.toDoList);
  },[])
const [ userInput, setUserInput ] = useState('');
const handleChange = (e) => {
    setUserInput(e.target.value);
    console.log(e.target.value);
}
const addTask = (userInput) => {
  let copy = [...toDoList];
  copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
  console.log(toDoList);   
  console.log(copy);   
  // copy.push({id: toDoList.length + 1, task: userInput, complete: false})
  setToDoList('');
  setToDoList(copy);
//  console.log(toDoList);        #error line:-this line is not working properly because of (setToDoList(copy);)
//         ReactDOM.render(toDoList.task,document.getElementById('line'))
}
const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(userInput)
    addTask(userInput);
    // console.log(userInput)
    // setToDoList('');
}
  return(
    <>
<div>
<input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
<button style={{margin: '10px'}} onClick={handleSubmit}>Submit</button>
</div>
</>
  );
}
  export default ToDoForm;