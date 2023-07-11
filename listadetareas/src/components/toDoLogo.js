import { useState } from "react";
import Todo from "./toDo";

export default function TodoApp() {
  const [title, setTitle] = useState("fff");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    const temp = [...todos];
    temp.unshift(newTodo);

    setTodos(temp);

    // setTodos([...todos, newTodo]);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreate" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title}/>
        <input 
          onClick={handleSubmit}
          type="submit" 
          value="Add" 
          className="buttonCreate"
          />
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
            <Todo key={item.id} item={item} /> 
          ))}
      </div>
    </div>
  );
}
