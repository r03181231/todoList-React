import React from "react";

// 템플릿 만들기
export const stateTemp = () => {
  return (
    <div className="cards-wrap">
      {/* 반복되는 것 : title, todoInputs 자료 중 isDone의 값에 따라 . filter () => .isDone !== isDoneValue */}
      {/* filter된 값 map~ => filter 재료 :  title, todoInputs,setTodoInputs, isDoneValue="done" : "isdone",  onComplete, onDelete  */}
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
  );
};

export default stateTemp;
