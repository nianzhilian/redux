import React from "react";

const Todo = ({ text, completed,change }) => {
  return (
    <li
      onClick={change}
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      {text}
    </li>
  );
};
export default Todo;
