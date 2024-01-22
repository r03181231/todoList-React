import React from "react";
import TodoCards from "view/main/todoCards/TodoCards";

// 템플릿 만들기
export const StateTemp = ({
  title,
  isDoneState,
  todoInputs,
  setTodoInputs,
  onComplete,
  onDelete,
}) => {
  const isDoneTodos = todoInputs.filter(
    (state) => state.isDone === isDoneState
  );
  return (
    <div className="cards-wrap">
      <h3>{title} </h3>
      <div className="todo-card-wrap">
        {isDoneTodos.map((isDoneItem) => {
          const { id } = isDoneItem;
          return (
            <TodoCards
              key={id}
              isDoneItem={isDoneItem}
              todoInputs={todoInputs}
              setTodoInputs={setTodoInputs}
              onComplete={onComplete}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StateTemp;
// {
/* 반복되는 것 : title, todoInputs 자료 중 isDone의 값에 따라 . filter () => .isDone !== isDoneValue */
// }
/* filter된 값 map~ => filter 재료 :  title, todoInputs,setTodoInputs, isDoneValue="done" : "isdone",  onComplete, onDelete  */
// }
