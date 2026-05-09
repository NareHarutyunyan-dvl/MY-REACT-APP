import { useState } from "react";

function ToDo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, { text, done: false }]);
    setText("");
  };

  const toggle = (i) => {
    const newTodos = [...todos];
    newTodos[i].done = !newTodos[i].done;
    setTodos(newTodos);
  };

  const remove = (i) => {
    console.log(i, "i");
    const newTodos = todos.filter((_, index) => index !== i);
    console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <span
              style={{
                textDecoration: todo.done ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => toggle(i)}>Done</button>

            <button onClick={() => remove(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ToDo;
