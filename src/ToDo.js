import React from 'react';
import './App.css';
const ToDo = (props) => {
   return (
       <div className={props.todo.complete ? "strike" : ""}>
             {/* { props.todo.task.onlick =(props.toggle(props.todo.id))} */}
            {/* props.todo.task.addEventListener('click', function(e) {
        props.toggle(props.todo.id)
        }, false); */}
           {props.todo.task}
       </div>
   );
};
export default ToDo;