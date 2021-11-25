import React, { useState } from 'react';
import './App.css';
import User from './User';
// import Home from './Home';
import List from './List';
import Add from './Add';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  const [name,setName]=useState("");
  function fun(value)
  {
    setName(value);
  }
  return (
     <div className="App">
       <Router>
         {/* <Link to ="/User"> User</Link>
         <Link to ="/List"> List</Link>
         <Link to ="/Add"> Add</Link> */}
         <Routes>
         <Route exact path="/" element={<User fun={fun}/>} />
            <Route exact path="/user" element={<User fun={fun}/>} />
           <Route exact path="/add" element={<Add />} />
           <Route path="/list" element={<List name={name}/>} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
