import React from "react";

const ToDoLists = (props) => {
  // console.log(props.text)

  // const deleteItems = () =>
  // {
  //   console.log("deleted");
  // }
  return (
    <>
      <div className="todo_style">
        <i
          className="fa-solid fa-trash"
          onClick={() => {  props.onSelect(props.id); }} ></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoLists;
