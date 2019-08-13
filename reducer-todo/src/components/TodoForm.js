import React, { useState, useReducer } from "react";
import Todo from "./Todo";
import { initialState, itemReducer } from "../reducers/ItemReducer";

const TodoForm = () => {
  const [newItem, setNewItem] = useState("");

  const [state, dispatch] = useReducer(itemReducer, initialState);

  const handleChange = e => {
    setNewItem(e.target.value);
  };

  const submitItem = event => {
    event.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: newItem });
    setNewItem("");
  };

  console.log("newItem: ", newItem);
  console.log("state in form: ", state);
  return (
    <>
      <form>
        <input
          type="text"
          value={newItem}
          name="task"
          onChange={handleChange}
        />
        <div className="button-container">
          <button type="submit" onClick={submitItem}>
            Submit
          </button>
          <button>Clear Completed</button>
        </div>
      </form>
      <div className="todo-list">
        {state.map(task => (
          <Todo key={task.id} task={task} />
        ))}
      </div>
    </>
  );
};

export default TodoForm;
