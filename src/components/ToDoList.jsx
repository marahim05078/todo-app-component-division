import React from "react";

function ToDoList(props) {
  // Read/Edit
  const edithandler = (id) => {
    const tobeEdited = props.toDoList.find((item) => item.id === id);
    props.setEditMode(true);
    props.setEditableItem(tobeEdited);
    props.setToDoTitle(tobeEdited.title);
  };
  // Delete
  const deletehandler = (id) => {
    const newToDoList = props.toDoList.filter((item) => item.id !== id);
    props.setToDoList(newToDoList);
  };
  return (
    <div className="todo-list">
      <p>Uncomplete item list</p>
      <ul>
        {props.toDoList.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" />
            <span>{todo.title}</span>
            <button onClick={() => edithandler(todo.id)}>Edit</button>
            <button onClick={() => deletehandler(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
