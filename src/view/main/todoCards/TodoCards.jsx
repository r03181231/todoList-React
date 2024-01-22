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
  const delBtnText = "삭제하기";
  const doneBtnText = "완료";
  const editBtnText = "수정";
  const saveBtnText = "저장";
  const cancelBtnText = "취소";
  const { id, title, comment, isDone } = isDoneItem;
  const [isEdit, setIsEdit] = useState(false); // 수정 상태 , 저장
  const [editValue, setEditValue] = useState({
    title: title,
    comment: comment,
  });

  console.log(editValue.title);
  const onEditValueChange = (e) => {
    const { name, value } = e.target;
    setEditValue({ ...editValue, [name]: value });
  };
  // 수정 누르면 수정 상태를 열어
  const onEdit = () => {
    setIsEdit(true);
  };
  // console.log(todoInputs);
  const onEditSave = (e) => {
    setTodoInputs((todoInputs) =>
      todoInputs.map((editTodo) =>
        editTodo.id === id
          ? {
              ...editTodo,
              title: editValue.title,
              comment: editValue.comment,
            }
          : editTodo
      )
    );
    setIsEdit(false);
  };

  const onCancelEdit = () => {
    // e.preventDefault();
    alert(1);
    // console.log(1);
    setIsEdit(false);
    // setEditValue({ title: title, comment: comment, isEdit: false });
  };

  return (
    <div className="work-nd-done">
      {!isEdit ? (
        <>
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
              onClick={onEdit}
              className={"edit-btn"}
            />
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            name="title"
            value={editValue.title}
            onChange={onEditValueChange}
          />
          <textarea
            name="comment"
            value={editValue.comment}
            onChange={onEditValueChange}
          ></textarea>
          <Button name={cancelBtnText} onCancelEdit={onCancelEdit} />
          <Button name={saveBtnText} onClick={onEditSave} />
        </>
      )}
    </div>
  );
};

export default TodoCards;

// todoInputs.map((editTodo) =>
//   editTodo.id === id
//     ? { title: editValue.title, comment: editValue.comment }
//     : editTodo
// );
// console.log(EditTodos);
