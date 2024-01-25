import React, { useState } from "react";
import TodoCards from "view/main/todoCards/TodoCards";

const CardTemp = ({ isDoneArr, setTodoInputs }) => {
  const isWorking = isDoneArr.find((state) => state.isDone === true);

  return (
    <section>
      <div className="cards-wrap">
        <h3>{isWorking ? "Working" : "Done"}</h3>
        <div className="todo-card-wrap">
          {isDoneArr.map((isDoneItem) => {
            const { id } = isDoneItem;
            return (
              <TodoCards
                key={id}
                isDoneItem={isDoneItem}
                setTodoInputs={setTodoInputs}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardTemp;
