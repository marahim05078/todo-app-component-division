import React from "react";

function Form(props) {
  // Create
  const addtodohandler = () => {
    if (!props.toDoTitle) {
      alert("Please enter a valid Title.");
    } else {
      const toDoItem = {
        id: Date.now(),
        title: props.toDoTitle,
        isComplete: false,
      };
      props.setToDoList([...props.toDoList, toDoItem]);
      props.setToDoTitle("");
    }
  };
  // Update
  const updatehandler = () => {
    props.setToDoList(
      props.toDoList.map((todo) => {
        if (todo.id === props.editableItem.id) {
          todo.title = props.toDoTitle;
        }
        return todo;
      })
    );
    props.setEditMode(false);
    props.setToDoTitle("");
  };

  return (
    <div className="todo">
      <input
        type="text"
        value={props.toDoTitle}
        onChange={(e) => props.setToDoTitle(e.target.value)}
      />
      <button
        onClick={() => (props.editMode ? updatehandler() : addtodohandler())}
      >
        {props.editMode ? "Update todo" : "Add todo"}
      </button>
    </div>
  );
}

export default Form;
