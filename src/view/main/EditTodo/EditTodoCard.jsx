import Button from "common/button/Button";
import React, { useState } from "react";
import "./editTodoCard.css";

function EditTodoCard({ isDoneItem, setTodoInputs, setIsEdit }) {
  const { id, title, comment, deadLine } = isDoneItem;
  const [editValue, setEditValue] = useState({ id, title, comment, deadLine });

  // 수정 값 할당 변수
  const editValueTitle = editValue.title;
  const editValueComment = editValue.comment;
  const editValueDeadLine = editValue.deadLine;
  // 값 변화 감지
  const onEditValueChange = (e) => {
    const { name, value } = e.target;
    setEditValue({ ...editValue, [name]: value });
  };

  //수정 저장
  const onEditSave = () => {
    //유효성
    const editSaveCheck = window.confirm("수정내용을 저장하시겠습니까?");
    if (
      editSaveCheck === true &&
      editValueTitle === title &&
      editValueComment === comment &&
      editValueDeadLine === deadLine
    ) {
      alert("수정된 내용이 없습니다");
      return;
    }
    if (editSaveCheck === false) {
      alert("수정을 취소하셨습니다.");
      setIsEdit(false);
      return;
    }

    setTodoInputs((prevTodoInputs) => {
      alert("내용을 수정하셨습니다.");
      return prevTodoInputs.map((prevTodo) => {
        if (prevTodo.id === id) {
          return {
            ...prevTodo,
            title: editValueTitle, //새로 들어간 title값
            comment: editValueComment,
            deadLine: editValueDeadLine,
          };
        }
        return prevTodo;
      });
    });
    setIsEdit(false);
  };
  // 수정 취소
  const onEditCancel = () => {
    alert("수정을 취소하셨습니다.");
    setIsEdit(false);
  };

  return (
    <div className="edit-wrap">
      <input
        type="text"
        name="title"
        value={editValueTitle}
        onChange={onEditValueChange}
        className="edit-title"
      />
      <textarea
        name="comment"
        rows={1}
        value={editValueComment}
        onChange={onEditValueChange}
      ></textarea>
      <input
        type="date"
        name="deadLine"
        min="1800-01-01"
        max="2200-12-31"
        className="edit-date"
        value={editValueDeadLine}
        onChange={onEditValueChange}
      />
      <div className="btn-cancel-nd-save">
        <Button name={"취소"} className={"cancel-btn"} onClick={onEditCancel} />
        <Button name={"저장"} className={"save-btn"} onClick={onEditSave} />
      </div>
    </div>
  );
}

export default EditTodoCard;
