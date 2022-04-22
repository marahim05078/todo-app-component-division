import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableItem, setEditableItem] = useState(null);

  return (
    <div className="app">
      <h2>Simple To-Do App</h2>
      <Form
        toDoTitle={toDoTitle}
        setToDoTitle={setToDoTitle}
        toDoList={toDoList}
        setToDoList={setToDoList}
        editableItem={editableItem}
        editMode={editMode}
        setEditMode={setEditMode}
      />
      <ToDoList
        setToDoTitle={setToDoTitle}
        toDoList={toDoList}
        setToDoList={setToDoList}
        setEditMode={setEditMode}
        setEditableItem={setEditableItem}
      />
    </div>
  );
}

export default App;
