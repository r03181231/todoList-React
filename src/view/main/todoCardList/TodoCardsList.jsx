import React, { useState } from "react";
import "./todoCardList.css";
import TodoCards from "../todoCards/TodoCards";

export const TodoCardsList = ({ todoInputs, setTodoInputs }) => {
  const [isDone, setDone] = useState(true);
  const trueTodos = todoInputs.filter((state) => state.isDone === isDone);
  const falseTodos = todoInputs.filter((state) => state.isDone !== isDone);
  return (
    <>
      <section>
        <div className="cards-wrap">
          <h3>{isDone ? "working" : "Done"} </h3>
          <div className="todo-card-wrap">
            {trueTodos.map((isDoneItem) => {
              const { id } = isDoneItem;
              return (
                <TodoCards
                  key={id}
                  isDoneItem={isDoneItem}
                  todoInputs={todoInputs}
                  setTodoInputs={setTodoInputs}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="cards-wrap">
          <h3>{!isDone ? "working" : "Done"} </h3>
          <div className="todo-card-wrap">
            {falseTodos.map((isDoneItem) => {
              const { id } = isDoneItem;
              return (
                <TodoCards
                  key={id}
                  isDoneItem={isDoneItem}
                  todoInputs={todoInputs}
                  setTodoInputs={setTodoInputs}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoCardsList;
