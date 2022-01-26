import React from 'react';
import './TodoItem.css'

function TodoItem(props) {
 
    return (
        <li className="TodoItem">
            <span 
                className={`Icon icon-check ${props.completed && 'Icon-check--activ'}`}
                onClick={props.onComplete}
            >
                O
            </span>
            <p className="taskDescription">{props.text}</p>
            <span 
                className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };