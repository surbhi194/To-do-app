import React from 'react';
import './App.css';
const ToDo = (props) => {
    const demo = () => {
        props.strikeIndex(props.index);
    }
   return (
       <div className={props.todo.complete ? "strike" : ""}>
             {/* { props.todo.task.onlick =(props.toggle(props.todo.id))} */}
            {/* props.todo.task.addEventListener('click', function(e) {
        props.toggle(props.todo.id)
        }, false); */}
           <span onClick={demo}>{props.todo.task}</span>
       </div>
   );
};
export default ToDo;