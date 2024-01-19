import React from "react";
import Button from "item/button/Button";
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

  return (
    <div className="work-nd-done">
      <h4>{title}</h4>
      <p>{comment}</p>
      <div>
        <Button name={delBtnText} onClick={() => onDelete(id)} />
        <Button
          name={isDone === false ? cancelBtnText : doneBtnText}
          onClick={() => onComplete(id)}
        />
      </div>
    </div>
  );
};

export default TodoCards;
