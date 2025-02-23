import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleAdd = () => {
    if (todo.trim() === "") return;

    if (editIndex !== null) {
      const updatedTodos = todos.map((item, index) =>
        index === editIndex ? todo : item
      );
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, todo]);
    }
    setTodo("");
  };

  const handleEdit = (index) => {
    setTodo(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1 className="heading">To-Do App</h1>
      <div className="todo-container">
        <h1>Add Todo</h1>
        <div className="add-input">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a new todo"
          />
          <button onClick={handleAdd}>{editIndex !== null ? "Update" : "Add"}</button>
        </div>
        <div className="todo-list">
          {todos.map((item, index) => (
            <div className="todo-item" key={index}>
              <p>{item}</p>
              <button className="edit" onClick={() => handleEdit(index)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
