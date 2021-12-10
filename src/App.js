import React, { useState } from "react";
import "./App.css";
import User from "./User";
import List from "./List";
import Add from "./Add";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  const [name, setName] = useState("");

  function fun(value) {
    setName(value);
  }

  return (
    <div className="App">

      <Router>

        <Routes>
          <Route exact path="/" element={<User fun={fun} />} />
          <Route exact path="/user" element={<User fun={fun} />} />
          <Route exact path="/add" element={<Add />} />
          <Route path="/list" element={<List name={name} />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
