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
const handleToggle = (id) => {
  let mapped = toDoList.map((task) => {
    return task.id == id ? { ...task, complete: !task.complete } : { ...task};
  });
  setToDoList(mapped);
}
const handleFilter = () => {
  let filtered = toDoList.filter(tasks => {
    return !tasks.complete;
  });
  console.log(filtered);
  setToDoList(filtered);    
}
const Submit = (e) => {
    e.preventDefault();
}
const set=(value)=>{
  setToDoList(value);
}
  return (
    <div className="Add">
    <button id="addbtn" className="Save2" onlick={Submit}><Link to="/List">Save</Link></button>
    <div class="form-control-1">
  {/* <textarea id="addtitle" class="form-control-1" placeholder="Topic" onChange={topicHandler}></textarea> */}
  <u><h3>TO-DO LIST</h3></u>
</div>
    <div class="form-floating">
  {/* <textarea id="addtxt" class="form-control" placeholder="Content" onChange={contentHandler}></textarea> */}
  <div className="line">
  <ToDoList handleToggle={handleToggle} toDoList={toDoList}/>
  </div>
  <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
  <ToDoForm toDoList={toDoList} set={set}/>
</div>
    </div>
  );
}
export default Add;