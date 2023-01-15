import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DeleteAdd, ToggleTodo, UpdateTodo } from "../Redux/TodoSlice";

const Todo = ({ todos }) => {
  let [isEdited, setisEdited] = useState(false);
  let [updatedTask, setupdatedTask] = useState("");
  const updated = () => {
    setisEdited(!isEdited);
    setupdatedTask(todos.task);
    isEdited && dispatch(UpdateTodo({ id: todos.id, task: updatedTask }));
  };
  let dispatch = useDispatch();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {isEdited ? (
        <input
          type="text"
          value={updatedTask}
          onChange={(e) => setupdatedTask(e.target.value)}
        />
      ) : (
        <h2
          style={{
            width: "300px",
            textDecoration: todos.isDone ? "line-through" : "",
          }}
        >
          {" "}
          {todos.task}{" "}
        </h2>
      )}

      <Button
        onClick={() => dispatch(DeleteAdd(todos.id))}
        style={{ height: "40px" }}
        variant="primary"
      >
        Delete
      </Button>
      <Button
        onClick={() => dispatch(ToggleTodo(todos.id))}
        style={{ height: "40px" }}
        variant="success"
      >
        {todos.isDone ? "UnDone" : "Done"}
      </Button>

      <Button onClick={updated} style={{ height: "40px" }} variant="warning">
        Update
      </Button>
    </div>
  );
};

export default Todo;
