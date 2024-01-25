// TodoCards.jsx - 수정, 저장, 취소 함수 포함
import React, { useState } from "react";
import EditTodoCard from "../EditTodo/EditTodoCard";
import Button from "common/button/Button";
import "./todoCards.css";

export const TodoCards = ({ isDoneItem, setTodoInputs }) => {
  const { id, title, comment, isDone, deadLine } = isDoneItem;
  const [isEdit, setIsEdit] = useState(false); // 수정 상태 , 저장

  const date = new Date(deadLine).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  //삭제 버튼
  const onDelete = (clickId) => {
    // 삭제 유효성
    if (window.confirm("삭제하시겠습니까?") === true) {
      alert("삭제되었습니다.");
    } else {
      alert("삭제를 취소하셨습니다.");
      return;
    }
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
    <div className="todo-card">
      <div className="work-nd-done">
        {!isEdit ? (
          <div className="todo-card">
            <h4>{title}</h4>
            <p className="view-comment">{comment}</p>
            <p className="view-date">{date}까지</p>
            <div className="btn-delete-nd-done">
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
          </div>
        ) : (
          <EditTodoCard
            isDoneItem={isDoneItem}
            setTodoInputs={setTodoInputs}
            setIsEdit={setIsEdit}
          />
        )}
      </div>
    </div>
  );
};

export default TodoCards;
