import './App.css';
import ToDoForm from "./ToDoForm"
import List from './List.js';
import { Link } from 'react-router-dom';
import ToDoList from "./ToDoList";
import React, { useState } from 'react';
import data from "./data.json";
function Add(props) {
    const [topic,setTopic]=useState("");
  const [content,setContent]=useState("");
  const [ toDoList, setToDoList ] = useState(data);
    // function topicHandler(e)
    // {
    //   let item=e.target.value;
    //   setTopic(item);
    // }
    // function contentHandler(e)
    // {
    //   let item=e.target.value;
    //   setContent(item);
    // }
const addTask = (userInput) => {
  let copy = [...toDoList];
  copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
  setToDoList(copy);
}
const handleToggle = (id) => {
  let mapped = toDoList.map(task => {
    return task.id == id ? { ...task, complete: !task.complete } : { ...task};
  });
  setToDoList(mapped);
}
const handleFilter = () => {
  let filtered = toDoList.filter(task => {
    return !task.complete;
  });
  setToDoList(filtered);
}
  return (
    <div className="Add">
    <button id="addbtn" className="Save2"><Link to="/List">Save</Link></button>
    <div class="form-control-1">
  {/* <textarea id="addtitle" class="form-control-1" placeholder="Topic" onChange={topicHandler}></textarea> */}
  <u><h3>TO-DO LIST</h3></u>
</div>
    <div class="form-floating">
  {/* <textarea id="addtxt" class="form-control" placeholder="Content" onChange={contentHandler}></textarea> */}
  <ToDoList handleToggle={handleToggle} handleFilter={handleFilter} toDoList={toDoList}/>
  <button style={{margin: '20px'}} onClick={props.handleFilter}>Clear Completed</button>
  <ToDoForm addTask={addTask} toDoList={toDoList}/>
</div>
    </div>
  );
}
export default Add;