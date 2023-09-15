import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToogleSubmit] = useState(true);
  const [isEditItem, setisEditItem] = useState(null);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {

    if(!inputList){
      alert("Please fill data");
    }else if(inputList && !toggleSubmit){

        setItems(

            items.map((elem) => {

              if(elem.id === isEditItem){

                return{...elem, name:inputList}
              }
              return elem;

            })
          )

          setToogleSubmit(true);

          setInputList('');

          setisEditItem(null);
    }
    else{

      const allInputData = { id: new Date().getTime().toString(), name:inputList }
      setItems((oldItems) => {
        return [...oldItems, allInputData];
      });

      setInputList("");
    }
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem) => {

        return arrElem.id !== id;

      });

    });
    
};

const updateItems = (id) => {
   
        let newEditItem = items.find((elem) => {

            return elem.id === id;
        })
        console.log(newEditItem);

        setToogleSubmit(false);

        setInputList(newEditItem.name);

        setisEditItem(id);
};


  return (
      <>
        <div className="main_div">
          <div className="center_div">
            <br />
            <h1>Todo List</h1>
            <br />
            <input type="text" placeholder="Add an Item" value={inputList} onChange={itemEvent}/>
            {
                toggleSubmit ?  <button onClick={listOfItems}> + </button> : <i className="fa-solid fa-pen" aria-hidden="true" onClick={listOfItems} />
            }
           

            <ol>
            
              {items.map((itemval)=>{
                return (

                    <>
                        <div className="todo_style">
                        <i className="fa fa-times" aria-hidden="true" onClick={() => deleteItems(itemval.id)}/>
                        <li className="list_style"> {itemval.name} </li>
                        <i className="fa-solid fa-pen" aria-hidden="true" onClick={() => updateItems(itemval.id)} />
                        </div>
                    </>

                  );
              })}
            </ol>

          </div>
        </div>
      </>
  );

};

export default App;