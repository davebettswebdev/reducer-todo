import React from "react";
import styled from 'styled-components';

const Item = styled.div`
    display: flex;
    .item-completed{
        text-decoration: line-through;
        color: darkgray;
    }
`

const ToDo = (props) =>{

    let classChanger = 'item';
    if (props.completed){
        classChanger = classChanger + '-completed'
    }

    const handleClick = () => {
        // console.log(props.id)
        props.toggleCompleted(props.id)
    }

    return(
        <Item>
        <div onClick={handleClick} className={classChanger}>
            <p>{props.item}</p>
        </div>
        </Item>
    )
}

export default ToDo;