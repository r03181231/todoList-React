import React, { useState } from "react";
import "./todoForm.css";
import Button from "../../../common/button/Button";

export const TodoForm = ({ todoInputs, setTodoInputs }) => {
  const add = "추가";
  const init = {
    id: 1,
    title: "",
    comment: "",
    isDone: true,
  };
  const [todoInput, setTodoInput] = useState(init);
  let idNum = 1 + todoInputs.length; //Math.random() * 10000
  const titleInput = todoInput.title;
  const commentInput = todoInput.comment;
  const blankPattern = /^\s+|\s+$/g;
  // 들어온 값으로 교체해주기
  const onInputHand = (e) => {
    const { name, value } = e.target;
    setTodoInput({ ...todoInput, [name]: value });
  };

  const onSubmitHand = (e) => {
    e.preventDefault();
    const titleBlank = titleInput.replace(blankPattern, "");
    const commentBlank = commentInput.replace(blankPattern, "");
    // 공백이면 아무 것도 리턴하지 않게 해줘.
    if (titleBlank === "" && commentBlank === "") {
      alert("빈칸을 전부 채워주세요.");
      return;
    }
    if (titleBlank === "" || commentBlank === "") {
      alert("빈칸을 전부 채워주세요.");
      return;
    }

    setTodoInputs([...todoInputs, { ...todoInput, id: idNum }]);
    setTodoInput({ id: idNum + 1, title: "", comment: "", isDone: true });
  };

  return (
    <section id="todo-form">
      <form onSubmit={onSubmitHand} className="form-wrap">
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={titleInput}
          onChange={onInputHand}
        />
        <label>내용</label>
        <input
          type="text"
          name="comment"
          value={commentInput}
          onChange={onInputHand}
        />
        <Button name={add} className={"add-btn"} />
      </form>
    </section>
  );
};

export default TodoForm;
