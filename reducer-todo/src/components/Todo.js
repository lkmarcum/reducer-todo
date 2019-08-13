import React from "react";

const Todo = props => {
  return (
    <div className="task">
      <p>{props.task.item}</p>
    </div>
  );
};

export default Todo;
