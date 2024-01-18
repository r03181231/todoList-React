import React from "react";
import "./todoCardList.css";
import TodoCards from "../todoCards/TodoCards";

export const TodoCardsList = ({ todoInputs, setTodoInputs }) => {
  const onDelete = (id) => {
    console.log(id);
    const stayTodos = todoInputs.filter((stayTodo) => stayTodo.id !== id);
    setTodoInputs(stayTodos);
  };
  const onComplete = (id) => {
    const stayTodos = todoInputs.map((done) => {
      console.log(done);
      const { isDone } = done;
      if (done.id === id) {
        return { ...done, isDone: !isDone };
      } else {
        return { ...done };
      }
    });
    setTodoInputs(stayTodos);
  };

  return (
    <>
      <section>
        <div>
          <h3>working </h3>
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
      </section>
      <section>
        <div>
          <h3>Done </h3>
          {todoInputs.map((isDoneItem) => {
            const { id, isDone } = isDoneItem;
            if (!isDone) {
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
      </section>
    </>
  );
};

export default TodoCardsList;
