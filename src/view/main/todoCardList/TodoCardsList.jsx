import React from "react";
import Button from "../../../item/button/Button";
import "./todoCardList.css";

function TodoCardsList() {
  const delBtnText = "삭제하기";
  const doneBtnText = "완료";
  return (
    <section>
      <div>
        <h3>리액트 공부하기</h3>
        <p>리액트 기초를 공부해 봅시다</p>
        <div>
          <Button name={delBtnText} />
          <Button name={doneBtnText} />
        </div>
      </div>
    </section>
  );
}

export default TodoCardsList;
