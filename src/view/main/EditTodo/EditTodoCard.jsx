import Button from "common/button/Button";
import React, { useRef, useState } from "react";

function EditTodoCard({ isDoneItem, setTodoInputs, setIsEdit }) {
  const { id, title, comment } = isDoneItem;
  const [editValue, setEditValue] = useState({
    title: title,
    comment: comment,
  });

  const editValueTitle = editValue.title;
  const editValueComment = editValue.comment;

  const onEditValueChange = (e) => {
    const { name, value } = e.target;
    setEditValue({ ...editValue, [name]: value });
  };
  const onEditSave = () => {
    setTodoInputs((prevTodoInputs) => {
      return prevTodoInputs.map((editTodo) => {
        if (editTodo.id === id) {
          return {
            ...editTodo,
            title: editValueTitle, //새로 들어간 title값
            comment: editValueComment,
          };
        } else {
          return editTodo;
        }
      });
    });
    setIsEdit(false);
  };

  const onEditCancel = () => {
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
      <div className="cancel-nd-save">
        <Button name={"취소"} className={"cancel-btn"} onClick={onEditCancel} />
        <Button name={"저장"} className={"save-btn"} onClick={onEditSave} />
      </div>
    </div>
  );
}

export default EditTodoCard;
