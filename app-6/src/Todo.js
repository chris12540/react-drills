import React from "react";

const Todo = props => {
  const todoList = props.list.map(item => <h1 key={item}>{item}</h1>);
  return <div>{todoList}</div>;
};

export default Todo;
