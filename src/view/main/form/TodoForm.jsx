import React, { useState } from "react";
import "./todoForm.css";
import Button from "../../../item/button/Button";

export const TodoForm = ({ todoInputs, setTodoInputs }) => {
  const add = "추가";
  const [todoInput, setTodoInput] = useState({
    id: 1,
    title: "",
    comment: "",
    isDone: true,
  });
  let idNum = 1 + todoInputs.length; //Math.random() * 10000
  const titleInput = todoInput.title;
  const commentInput = todoInput.comment;
  const blankPattern = /^\s+|\s+$/g;
  // 들어온 값으로 교체해주기
  const onInputHand = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTodoInput({ ...todoInput, [name]: value });
  };
  //
  const onSubmitHand = (e) => {
    e.preventDefault();
    // 공백이면 null을 줘.
    if (
      todoInput.title.replace(blankPattern, "") === "" ||
      todoInput.comment.replace(blankPattern, "") === ""
    ) {
      return null;
    }
    setTodoInputs([...todoInputs, { ...todoInput, id: idNum }]);
    setTodoInput("");
  };

  return (
    <section>
      <form onSubmit={onSubmitHand}>
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={titleInput || ""}
          onChange={onInputHand}
        />
        <label>내용</label>
        <input
          type="text"
          name="comment"
          value={commentInput || ""}
          onChange={onInputHand}
        />
        <Button name={add} />
      </form>
    </section>
  );
};

export default TodoForm;
