import React, { useState } from "react";
import TodoCardsList from "view/main/todoCardList/TodoCardsList";
import "./todolist.css";
import TodoForm from "../form/TodoForm";

export const TodoList = () => {
  const [todoInputs, setTodoInputs] = useState([
    {
      id: 1,
      title: "알고리즘 풀기",
      comment: "2문제",
      isDone: true,
      deadLine: "2024-02-05",
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
