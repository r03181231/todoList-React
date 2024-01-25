import React, { useState } from "react";
import "./todoList.css";
import TodoForm from "../form/TodoForm";
import Temp from "common/CardTemp/CardTemp";

export const TodoList = () => {
  const [todoInputs, setTodoInputs] = useState([]);
  const doneTrueTodos = todoInputs.filter((state) => state.isDone === true);
  const doneFalseTodos = todoInputs.filter((state) => state.isDone === false);
  const [sort, setSort] = useState("asc");

  const sortOrder = () => {
    const orderDeadLine = todoInputs.sort((a, b) => {
      if (sort === "asc") {
        return new Date(a.deadLine) - new Date(b.deadLine);
      } else {
        return new Date(b.deadLine) - new Date(a.deadLine);
      }
    });
    setTodoInputs(orderDeadLine);
  };

  const onSortValue = (e) => {
    setSort(e.target.value);
    sortOrder();
  };

  return (
    <main>
      <TodoForm setTodoInputs={setTodoInputs} />
      <section>
        <div className="sort-wrap">
          <select name="sort" value={sort} onChange={onSortValue}>
            <option value="asc">먼일순</option>
            <option value="desc">가까운일순</option>
          </select>
        </div>
      </section>
      <Temp isDone={doneTrueTodos} setTodoInputs={setTodoInputs} />
      <Temp isDone={doneFalseTodos} setTodoInputs={setTodoInputs} />
    </main>
  );
};

export default TodoList;
