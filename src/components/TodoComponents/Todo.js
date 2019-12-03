import React from "react";
import "../TodoComponents/Todo.css";

const Todo = props => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    return (
        <div className={`task${props.task.completed ? ' Completed' : ''}`} onClick={() => props.toggleCompleted(props.task.id)}>
<p>{props.task.task} - {today.toLocaleDateString("en-US", options)}</p>
        </div>
    );
}

export default Todo;