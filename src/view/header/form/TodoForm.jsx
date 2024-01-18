import React, { useState } from "react";
import "./todoForm.css";
import Button from "../../../item/button/Button";

let idNum = 1;
export const TodoForm = ({ todoInputs, setTodoInputs }) => {
  const add = "추가";
  const [todoInput, setTodoInput] = useState({
    id: 1,
    title: "",
    comment: "",
    state: "working",
  });
  // let idNum = todoInput.length + 1;
  const titleInput = todoInput.title;
  const commentInput = todoInput.comment;
  const blankPattern = /^\s+|\s+$/g;

  const onInputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTodoInput({ ...todoInput, [name]: value });
  };

  const onSubmitHand = (e) => {
    e.preventDefault();

    console.log(todoInput);
    if (
      titleInput.replace(blankPattern, "") === "" ||
      commentInput.replace(blankPattern, "") === ""
    )
      return;
    setTodoInputs([...todoInputs, { ...todoInput, id: idNum }]);
    idNum++;
  };

  return (
    <section>
      <form onSubmit={onSubmitHand}>
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={todoInput.title}
          onChange={onInputHandle}
        />
        <label>내용</label>
        <input
          type="text"
          name="comment"
          value={todoInput.comment}
          onChange={onInputHandle}
        />
        <Button name={add} />
      </form>
    </section>
  );
};

export default TodoForm;
