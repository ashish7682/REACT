import React, { useState } from "react";
import todo from "../images/Todo.webp";
import "../style/index1.css";

const ToDoLists1 = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItem = (id) => {
    // console.log(e);
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index != id;
      });
    });
  };

  // remove all the elements
  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="todologo" />
            <figcaption>Add Your List Here ✌️</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items..."
              onChange={itemEvent}
              value={inputList}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={listOfItems}
            />
            <i />
          </div>
          <div className="showItems">
            {items.map((ele, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{ele}</h3>
                  <i
                    className="far fa-trash-alt add-btn1"
                    title="Delete Item"
                    onClick={() => {
                      deleteItem(index);
                    }}
                  />
                  <i />
                </div>
              );
            })}
          </div>

          {/* clear all button */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoLists1;
