// TodoCards.jsx - 수정, 저장, 취소 함수 포함
import React, { useState } from "react";
import Button from "common/button/Button";
import "./todoCards.css";
import EditTodoCard from "../EditTodo/EditTodoCard";

export const TodoCards = ({ isDoneItem, todoInputs, setTodoInputs }) => {
  const { id, title, comment, isDone } = isDoneItem;
  const [isEdit, setIsEdit] = useState(false); // 수정 상태 , 저장

  //삭제 버튼
  const onDelete = (clickId) => {
    setTodoInputs((prevTodoInputs) =>
      prevTodoInputs.filter((stayTodo) => stayTodo.id !== clickId)
    );
  };
  //완료 버튼
  const onComplete = (clickId) => {
    setTodoInputs((prevTodoInputs) =>
      prevTodoInputs.map((done) => {
        const { isDone } = done;
        if (done.id !== clickId) {
          return { ...done };
        } else {
          return { ...done, isDone: !isDone };
        }
      })
    );
  };

  // 수정 누르면 수정 상태를 열어
  const onEdit = () => {
    setIsEdit(true);
  };

  return (
    <div className="work-nd-done">
      {!isEdit ? (
        <>
          <h4>{title}</h4>
          <p className="view-comment">{comment}</p>
          <div className="delete-nd-done">
            <Button
              name={isDone ? "완료" : "취소"}
              onClick={() => onComplete(id)}
              className={"done-btn"}
            />
            <Button
              name={"삭제하기"}
              onClick={() => onDelete(id)}
              className={"delete-btn"}
            />
            <Button name={"수정"} onClick={onEdit} className={"edit-btn"} />
          </div>
        </>
      ) : (
        <EditTodoCard
          isDoneItem={isDoneItem}
          setTodoInputs={setTodoInputs}
          setIsEdit={setIsEdit}
        />
      )}
    </div>
  );
};

export default TodoCards;
