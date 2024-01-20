import React from "react";
import "./todoCardList.css";
import StateTemp from "common/stateTemp/stateTemp";

export const TodoCardsList = ({ todoInputs, setTodoInputs }) => {
  //삭제 버튼
  const onDelete = (clickId) => {
    const stayTodos = todoInputs.filter((stayTodo) => stayTodo.id !== clickId);
    setTodoInputs(stayTodos);
  };
  //완료 버튼
  const onComplete = (clickId) => {
    const stayTodos = todoInputs.map((done) => {
      const { isDone } = done;
      if (done.id !== clickId) {
        //1, 2,3,4 => working(true)    1, 1 => Done(false)
        return { ...done };
      } else {
        return { ...done, isDone: !isDone };
      }
    });
    setTodoInputs(stayTodos);
  };

  return (
    <>
      <section>
        <StateTemp
          title={"working"}
          isDoneState={true}
          todoInputs={todoInputs}
          setTodoInputs={setTodoInputs}
          onComplete={onComplete}
          onDelete={onDelete}
          // onEdit={onEdit}
        />
      </section>
      <section>
        <StateTemp
          title={"Done"}
          isDoneState={false}
          todoInputs={todoInputs}
          setTodoInputs={setTodoInputs}
          onComplete={onComplete}
          onDelete={onDelete}
          // onEdit={onEdit}
        />
      </section>
    </>
  );
};

export default TodoCardsList;
