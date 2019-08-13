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

  //   const testToggle = event => {
  //     event.preventDefault();

  //     dispatch({ type: "TOGGLE_ITEM", payload: 3892987589 });
  //     console.log("click");
  //     console.log("after click state", state);
  //   };

  const toggleItem = id => {
    dispatch({ type: "TOGGLE_ITEM", payload: id });
    console.log("click");
  };

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
        {state.todos.map(task => (
          <Todo key={task.id} task={task} toggleItem={toggleItem} />
        ))}
      </div>
    </>
  );
};

export default TodoForm;
