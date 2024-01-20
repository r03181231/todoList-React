import React, { useState } from "react";
import Button from "common/button/Button";
import "./todoCards.css";

export const TodoCards = ({
  isDoneItem,
  todoInputs,
  setTodoInputs,
  onDelete,
  onComplete,
}) => {
  const { id, title, comment, isDone } = isDoneItem;
  const delBtnText = "삭제하기";
  const doneBtnText = "완료";
  const editBtnText = "수정";
  const saveBtnText = "저장";
  const cancelBtnText = "취소";

  const [isEdit, setIsEdit] = useState(false); // 수정 상태 , 저장
  const [editValue, setEditValue] = useState({
    title: title,
    comment: comment,
  });
  const onTitleEditChange = (e) => {
    const title = e.target;
    setEditValue({ ...editValue, title: title.value });
  };
  const onCommentEditChange = (e) => {
    const comment = e.target;
    setEditValue({ ...editValue, comment: comment.value });
  };
  // 수정 누르면 수정 상태를 열어
  const onEdit = () => {
    setIsEdit(true);
  };

  const EditTodos = todoInputs.map((editTodo) =>
    editTodo.id === id
      ? { title: editValue.title, comment: editValue.comment }
      : editTodo
  );
  console.log(EditTodos);

  const onEditSave = () => {
    console.log("저장버튼입니다.");
  };

  return (
    <div className="work-nd-done">
      <h4>{title}</h4>
      <p>{comment}</p>
      <div className="del-nd-done">
        <Button
          name={isDone ? doneBtnText : cancelBtnText}
          onClick={() => onComplete(id)}
          className={"done-btn"}
        />
        <Button
          name={delBtnText}
          onClick={() => onDelete(id)}
          className={"del-btn"}
        />
        <Button
          name={editBtnText}
          onClick={() => onEdit(id)}
          className={"edit-btn"}
        />
      </div>
      <form onClick={onEditSave}>
        <input
          type="text"
          value={editValue.title}
          onChange={onTitleEditChange}
        />
        <textarea
          cols="44"
          rows="2"
          value={editValue.comment}
          onChange={onCommentEditChange}
        ></textarea>
        <Button name={cancelBtnText} />
        <Button name={saveBtnText} />
      </form>
    </div>
  );
};

export default TodoCards;
