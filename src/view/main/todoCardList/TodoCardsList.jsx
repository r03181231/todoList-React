import React from "react";
import "./todoCardList.css";
import TodoCards from "../todoCards/TodoCards";

export const TodoCardsList = ({ todoInputs, setTodoInputs }) => {
  const onDelete = (clickId) => {
    const stayTodos = todoInputs.filter((stayTodo) => stayTodo.id !== clickId);
    setTodoInputs(stayTodos);
  };
  const onComplete = (clickId) => {
    const stayTodos = todoInputs.map((done) => {
      const { isDone } = done;
      if (done.id !== clickId) {
        //1, 2,3,4 => working(true)    1, 1 => Done(false)
        return { ...done, isDone: isDone };
      } else {
        return { ...done, isDone: !isDone };
      }
    });
    setTodoInputs(stayTodos);
  };

  return (
    <>
      <section>
        <div className="cards-wrap">
          <h3>working </h3>
          <div className="todo-card-wrap">
            {todoInputs.map((isDoneItem) => {
              const { id, isDone } = isDoneItem;
              if (isDone) {
                return (
                  <TodoCards
                    isDoneItem={isDoneItem}
                    setTodoInputs={setTodoInputs}
                    onComplete={onComplete}
                    key={id}
                    onDelete={onDelete}
                  />
                );
              } else {
                return;
              }
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="cards-wrap">
          <h3>Done </h3>
          <div className="todo-card-wrap">
            {todoInputs.map((isDoneItem) => {
              const { id, isDone } = isDoneItem;
              if (isDone === false) {
                return (
                  <TodoCards
                    isDoneItem={isDoneItem}
                    setTodoInputs={setTodoInputs}
                    onComplete={onComplete}
                    key={id}
                    onDelete={onDelete}
                  />
                );
              } else {
                return;
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoCardsList;
