import React, { useState } from "react";
import TodoForm from "view/header/form/TodoForm";
import TodoCardsList from "view/main/todoCardList/TodoCardsList";
import "./todolist.css";

export const TodoList = () => {
  const [todoInputs, setTodoInputs] = useState([
    {
      id: 1,
      title: "알고리즘 풀기",
      comment: "2문제",
      state: "working",
    },
  ]);
  return (
    <main>
      <TodoForm todoInputs={todoInputs} setTodoInputs={setTodoInputs} />
      <TodoCardsList todoInputs={todoInputs} setTodoInputs={setTodoInputs} />
    </main>
  );
};

export default TodoList;
