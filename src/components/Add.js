import "./App.css";
import ToDoForm from "./ToDoForm";
import List from "./List.js";
import { Link } from "react-router-dom";
import ToDoList from "./ToDoList";
import React, { useState } from "react";

function Add(props) {

  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [toDoList, setToDoList] = useState(back);
  var back = JSON.parse(localStorage.getItem("data"));

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });

    localStorage.setItem("data", JSON.stringify(mapped));
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((tasks) => {
      return !tasks.complete;
    });

    setToDoList(filtered);
    localStorage.setItem("data", JSON.stringify(filtered));
  };

  const Submit = (e) => {
    e.preventDefault();
  };

  const set = (value) => {
    setToDoList(value);
  };

  const strikeIndex = (value) => {
    handleToggle(value + 1);
  };

  return (
    <div className="Add">

      <button id="addbtn" className="Save2" onlick={Submit}>
        <Link to="/List">Save</Link>
      </button>

      <div class="form-control-1">
        <u>
          <h3>TO-DO LIST</h3>
        </u>
      </div>

      <div class="form-floating">

        <div className="line">
          <ToDoList strikeIndex={strikeIndex} toDoList={toDoList} />
        </div>
        <button style={{ margin: "20px" }} onClick={handleFilter}>Clear Completed </button>
        <ToDoForm toDoList={toDoList} set={set} />
      </div>

    </div>
  );
}
export default Add;
