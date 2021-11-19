import './App.css';
import List from './List.js';
import React, { useState } from 'react';
function Add(props) {
    const [topic,setTopic]=useState("");
  const [content,setContent]=useState("");
    function Save()
    {
        <list/>
    }
    function topicHandler(e)
    {
      let item=e.target.value;
      setTopic(item);
    }
    function contentHandler(e)
    {
      let item=e.target.value;
      setContent(item);
    }
  return (
    <div className="Add">
    <button className="Save" onClick={()=>Save}>Save</button>
    <input className="Button" type="text" placeholder="Topic" onChange={topicHandler}/>
    <input className="Button" type="text" placeholder="Content" onChange={contentHandler}/>
    </div>
  );
}

export default Add;