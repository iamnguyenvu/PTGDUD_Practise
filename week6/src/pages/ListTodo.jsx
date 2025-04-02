import React, { useCallback, useReducer, useRef, useMemo } from "react";

// Custom Hook để quản lý danh sách Todo
function useTodos() {
  const handleListTodo = (state, action) => {
    switch (action.type) {
      case "add":
        return {
          listTodo: [...state.listTodo, { id: Date.now(), name: action.name }],
        };
      case "delete":
        return {
          listTodo: state.listTodo.filter((todo) => todo.id !== action.id),
        };
      default:
        return state;
    }
  };

  return useReducer(handleListTodo, { listTodo: [] });
}

function ListTodo() {
  const [state, dispatch] = useTodos();
  const inputRef = useRef(null);

  const handleAddTodo = useCallback(() => {
    if (inputRef.current.value.trim() !== "") {
      dispatch({ type: "add", name: inputRef.current.value });
      inputRef.current.value = "";
      inputRef.current.focus(); // Focus lại vào ô nhập
    }
  }, [dispatch]);

  const handleDeleteTodo = useCallback((id) => {
    dispatch({ type: "delete", id });
  }, [dispatch]);

  // useMemo để tối ưu danh sách
  const memoizedList = useMemo(() => {
    return state.listTodo.map((item) => (
      <div
        key={item.id}
        className="flex justify-between items-center p-3 bg-gray-100 rounded-md shadow-md hover:bg-gray-200 transition-all duration-300"
      >
        <span className="text-lg">{item.name}</span>
        <button
          onClick={() => handleDeleteTodo(item.id)}
          className="px-3 py-1 text-white bg-red-600 rounded-md hover:bg-red-700 transition-all duration-300"
        >
          Delete
        </button>
      </div>
    ));
  }, [state.listTodo, handleDeleteTodo]);

  return (
    <div className="max-w-md mx-auto p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Todo List</h2>
      <div className="flex gap-2">
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter a task"
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300"
        >
          Add
        </button>
      </div>
      <div className="mt-4 space-y-2">{memoizedList}</div>
    </div>
  );
}

export default ListTodo;
