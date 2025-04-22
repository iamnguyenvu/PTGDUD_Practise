import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, toggle } from "../features/TodoSlice";

const TodoRedux = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  return (
    <div>
      <h3 className="text-2xl my-4">TodoList Redux</h3>
      <div className="my-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />
        <button
          className="bg-blue-500 text-white p-2 rounded ml-2"
          onClick={() => {
            if (text.trim()) {
              dispatch(add(text));
              setText("");
            }
          }}
        >
          Add Todo
        </button>
      </div>
      
      <ul className="mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center mb-2">
            <input 
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggle(todo.id))}
              className="mr-2"
            />
            <span 
              className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
              onClick={() => dispatch(toggle(todo.id))}
              style={{cursor: 'pointer'}}
            >
              {todo.text}
            </span>
            <button
              className="bg-red-500 text-white p-1 rounded"
              onClick={() => dispatch(remove(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoRedux;
