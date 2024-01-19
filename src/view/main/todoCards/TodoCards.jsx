import React, { useState } from "react";
import Button from "common/button/Button";
import "./todoCards.css";

export const TodoCards = ({
  isDoneItem,
  setTodoInput,
  onDelete,
  onComplete,
}) => {
  const { id, title, comment, isDone } = isDoneItem;
  const delBtnText = "삭제하기";
  const doneBtnText = "완료";
  const cancelBtnText = "취소";
  const editBtnText = "수정";

  const [isEdit, setIsEdit] = useState(false); // 수정 상태 , 저장
  const [editTitle, setEditTitle] = useState(title); // 제목 세팅
  const [editComment, setEditComment] = useState(comment); // 내용 세팅

  return (
    <div className="work-nd-done">
      <h4>{title}</h4>
      <p>{comment}</p>
      <div className="del-nd-done">
        <Button
          name={isDone === false ? cancelBtnText : doneBtnText}
          onClick={() => onComplete(id)}
          className={"done-btn"}
        />
        <Button
          name={delBtnText}
          onClick={() => onDelete(id)}
          className={"del-btn"}
        />
        <Button name={editBtnText} />
      </div>
    </div>
  );
};

export default TodoCards;
