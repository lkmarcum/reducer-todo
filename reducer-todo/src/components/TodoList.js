import React, { useReducer } from "react";
import Todo from "./Todo";
import { initialState, itemReducer } from "../reducers/ItemReducer";

const TodoList = () => {
  const [state, dispatch] = useReducer(itemReducer, initialState);
  console.log("state: ", state);
  return (
    <div className="todo-list">
      {state.map(task => (
        <Todo key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TodoList;
