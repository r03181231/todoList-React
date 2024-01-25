import React, { useRef, useState } from "react";
import "./todoForm.css";
import Button from "../../../common/button/Button";

export const TodoForm = ({ todoInputs, setTodoInputs }) => {
  const add = "추가";
  const init = {
    id: 1,
    title: "",
    comment: "",
    isDone: true,
    deadLine: "2024-02-05",
  };
  const refTitle = useRef(null);
  const [todoInput, setTodoInput] = useState(init);
  let idNum = Date.now(); //Math.random() * 10000
  const titleInput = todoInput.title;
  const commentInput = todoInput.comment;
  const deadLineInput = todoInput.deadLine;
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
    setTodoInput(init);
    refTitle.current.focus();
  };

  return (
    <section id="todo-form">
      <form onSubmit={onSubmitHand} className="form-wrap">
        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          name="title"
          value={titleInput}
          onChange={onInputHand}
          ref={refTitle}
          autoFocus
        />
        <label htmlFor="comment">내용</label>
        <input
          id="comment"
          type="text"
          name="comment"
          value={commentInput}
          onChange={onInputHand}
        />
        <label htmlFor="deadLine">마감일</label>
        <input
          id="deadLine"
          type="date"
          name="deadLine"
          min="1800-01-01"
          max="2200-12-31"
          value={deadLineInput}
          onChange={onInputHand}
        />
        <Button name={add} className={"add-btn"} />
      </form>
    </section>
  );
};

export default TodoForm;
