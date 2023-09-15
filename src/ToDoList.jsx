import React, { useState } from "react";

const ToDoList = (props) => {

    const [items, setItems] = useState([]);

    const updateItems = (id) => {
   
        let newEditItem = items.find((elem) => {

            return elem.id === id;
        })
        console.log(newEditItem);
};

    return (
    <>
        <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true" onClick={() => {
            props.onSelect(props.id);
        }} />
        <li className="list_style"> {props.text} </li>
         <i className="fa-solid fa-pen" aria-hidden="true" onClick={() => updateItems(props.id)} />
        </div>
    </>
    
    );
};

export default ToDoList;
