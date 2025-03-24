import React, { use, useEffect, useReducer, useState } from "react";
import { Row, Col, InputGroup, Button } from "react-bootstrap";

function ListTodo() {
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
  const [state, dispatch] = useReducer(handleListTodo, { listTodo: [] });

  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      dispatch({ type: "add", name: input });
      setInput("");
      //   console.log(input);
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "delete", id });
  };

  useEffect(() => {}, []);

  return (
    <div style={{ margin: "20px" }}>
      <Row>
        <InputGroup>
          <input
            type="text"
            placeholder="Enter a task"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            //   console.log(input);
            }}
          />
          <Button
            onClick={handleAddTodo}
            style={{ backgroundColor: "seagreen" }}
          >
            Add
          </Button>
        </InputGroup>
      </Row>
      {state.listTodo.map((item) => {
        return (
          <Row
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <span style={{ margin: 20 }}>{item.name}</span>
            <Button
              variant="danger"
              onClick={() => handleDeleteTodo(item.id)}
              style={{ justifyContent: "flex-end", backgroundColor: "darkred" }}
            >
              Delete
            </Button>
          </Row>
        );
      })}
    </div>
  );
}

export default ListTodo;
