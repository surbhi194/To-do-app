import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css";
import Add from "./Add.js";
import User from "./User.js";

function List(props) {

  const location = useLocation();

  useEffect(() => {
    console.log(props.name);
  }, []);

  return (
    <div className="List">

      <h2>Welcome {props.name}</h2>

      <div className="Save1">
        <button className="Save">
          <Link to="/User">log out</Link>
        </button>
      </div>

      <div className="More1">
        <button className="More">
          <b>
            <Link to="/Add">My_list</Link>
          </b>
        </button>
      </div>
      
    </div>
  );
}

export default List;
