import './App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import List from './List.js';
function User() {
  const [user,setUser]=useState("");
  const [password,setPassword]=useState("");
  const [userErr,setUserErr]=useState(false);
  const [passwordErr,setpasswordErr]=useState(false);
  // function signupHandler(e)
  // {
  //   e.preventDefault();
  //   <List user={user} password={password}/>
  // }
  function userHandler(e)
  {
    let item=e.target.value;
    if(item.length<4)
    {
      setUserErr(true);
    }
    else
    {
      setUserErr(false);
    }
    setUser(item);
  }
  function passwordHandler(e)
  {
    let item=e.target.value;
    if(item.length<8)
    {
      setpasswordErr(true);
    }
    else
    {
      setpasswordErr(false);
    }
    setPassword(item);
  }
  // function loginHandler(e)
  // {
  //   if(user.length<3||password.length<8)
  //   {
  //     alert("Correct valid values:(");
  //   }
  //   else{
  //     alert("all good:)");
  //   }
  //   e.preventDefault();
  // }
    return (
      <div className="User">
       <h2><i>To-Do App</i></h2> 
        <form>
          <br></br>
          User Name :-
          <input type="text" placeholder="userName" onChange={userHandler}/>
          {userErr?<span>user not valid</span>:<span> </span>}<br/><br/>
          Password :-
          <input type="password" placeholder="password" onChange={passwordHandler}/>
          {passwordErr?<span>password not valid(password must contain atleast 8 characters)</span>:<span> </span>}<br/><br/>
         {user.length>3&&password.length>=8? <button><Link to="/List">signUp</Link></button>:<div><button>signUp</button></div>}<br/><br/>
          <div><i>already have an account?</i><Link to="/List">login</Link></div>
        </form>
      </div>
    );
  }
  
export default User;