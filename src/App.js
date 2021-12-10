import React, { useState } from "react";
// import "./App.css";
import User from "./components/User";
import List from "./components/List";
import Add from "./components/Add";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [name, setName] = useState("");

  const fun=(value)=> {
    setName(value);
  }

  return (
    <div className="App">

      <Router>

        <Routes>
          <Route exact path="/" element={<User fun={fun} />} />
          <Route exact path="/User" element={<User fun={fun} />} />
          <Route exact path="/Add" element={<Add />} />
          <Route path="/List" element={<List name={name} />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
