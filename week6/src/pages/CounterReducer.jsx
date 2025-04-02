import React, { useReducer, useRef, useEffect, useMemo, useCallback } from "react";

function CounterReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return { count: state.count + 1 };
      case "dec":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const prevCountRef = useRef(state.count);

  // useEffect để cập nhật giá trị trước đó
  useEffect(() => {
    prevCountRef.current = state.count;
  }, [state.count]);

  // useMemo để tối ưu kiểm tra số chẵn/lẻ
  const isEven = useMemo(() => state.count % 2 === 0, [state.count]);

  // useCallback để tối ưu hóa các hàm xử lý
  const increment = useCallback(() => dispatch({ type: "inc" }), []);
  const decrement = useCallback(() => dispatch({ type: "dec" }), []);

  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Counter</h2>
      
      <div className="text-4xl font-semibold text-blue-600 mb-2">{state.count}</div>
      <p className={`text-lg ${isEven ? "text-green-500" : "text-red-500"}`}>
        {isEven ? "Even" : "Odd"}
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Previous Count: {prevCountRef.current}
      </p>

      <div className="flex justify-center gap-4">
        <button
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition-all"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 transition-all"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterReducer;
