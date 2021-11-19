import './App.css';
import React, { useState } from 'react';
import List from './List.js';
function User() {
  const [user,setUser]=useState("");
  const [password,setPassword]=useState("");
  const [userErr,setUserErr]=useState(false);
  const [passwordErr,setpasswordErr]=useState(false);
  function signupHandler(e)
  {
    e.preventDefault();
    <List user={user} password={password}/>
  }
  function userHandler(e)
  {
    let item=e.target.value;
    if(item.length<3)
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
    return (
      <div className="User">
       <h2><i>To-Do App</i></h2> 
        {/* <form>
          <br></br>
          User Name:-
          <input type="text" placeholder="userName" onChange={userHandler}/>
          {userErr?<span>user not valid</span>:<span> </span>}<br/><br/>
          Password:-
          <input type="password" placeholder="password" onChange={passwordHandler}/>
          {passwordErr?<span>password not valid(password must contain atleast 8 characters)</span>:<span> </span>}<br/><br/>
          <button onClick={()=>signupHandler}>signUp</button><br/><br/>
          <h6><i>already have an account?</i><button>login</button></h6>
        </form> */}
      </div>
    );
  }
  
export default User;