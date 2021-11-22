import './App.css';
import List from './List.js';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
function Add(props) {
    const [topic,setTopic]=useState("");
  const [content,setContent]=useState("");
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
    <button className="Save2"><Link to="/List">Save</Link></button>
    <div className="Button">
    <div class="form-floating">
  <textarea class="form-control-1" placeholder="Topic" id="floatingTextarea1" onChange={topicHandler}></textarea>
</div>
    <div class="form-floating">
  <textarea class="form-control" placeholder="Content" id="floatingTextarea2" onChange={contentHandler}></textarea>
</div>
    </div>
    </div>
  );
}
export default Add;