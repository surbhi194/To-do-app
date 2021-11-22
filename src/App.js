import React from 'react';
import './App.css';
import User from './User';
// import Home from './Home';
import List from './List';
import Add from './Add';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
     <div className="App">
       <Router>
         {/* <Link to ="/User"> User</Link>
         <Link to ="/List"> List</Link>
         <Link to ="/Add"> Add</Link> */}
         <Routes>
         <Route exact path="/" element={<User />} />
            <Route exact path="/user" element={<User />} />
           <Route exact path="/add" element={<Add />} />
           <Route path="/list" element={<List />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
