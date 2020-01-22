import React from "react";

import ToDo from './ToDo';

const ToDoList = (props) =>{

    

    // console.log (props)

    return(
        <div>
            {props.state.map(item =>(
                <ToDo
                    key={item.id}
                    id={item.id}
                    item={item.item}
                    completed={item.completed}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
        </div>
    )
}

export default ToDoList;