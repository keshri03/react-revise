import { useEffect, useState } from "react";
import "./App.css";
import { Todoprovider } from "./contexts";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";

function App() {
  const [todos, settodos] = useState([]);

  const addTodo = (todo) => {
  
    settodos((prev) => [{id: Date.now(), ...todo}, ...prev]);
  };
  const updateTodo = (id, todo) => {
    settodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id == id ? todo : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((curtodo) => curtodo.id !== id));
  };

  const toggleComplete = (id) => {
    settodos((prev) =>
      prev.map((curtodo) =>
        curtodo.id === id
          ? { ...curtodo, completed: !curtodo.completed }
          : curtodo
      )
    );
  };

  useEffect(() => {
    const alltodos = JSON.parse(localStorage.getItem("todos"));
    if (alltodos && alltodos.length > 0) {
      settodos(alltodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Todoprovider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className=" bg-[#306b8877] w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>

          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
