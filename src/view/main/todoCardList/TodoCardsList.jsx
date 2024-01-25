import "./todoCardList.css";
import TodoCards from "../todoCards/TodoCards";
import { useState } from "react";

export const TodoCardsList = ({ todoInputs, setTodoInputs }) => {
  const doneTrueTodos = todoInputs.filter((state) => state.isDone === true);
  const doneFalseTodos = todoInputs.filter((state) => state.isDone === false);
  const [sort, setSort] = useState("asc");

  const sortOrder = () => {
    const orderDeadLine = todoInputs.sort((a, b) => {
      if (sort === "asc") {
        return new Date(a.deadLine) - new Date(b.deadLine);
      } else {
        return new Date(b.deadLine) - new Date(a.deadLine);
      }
    });
    setTodoInputs(orderDeadLine);
  };

  const onChange = (e) => {
    setSort(e.target.value);
    sortOrder();
  };
  return (
    <>
      <section>
        <div className="sort-wrap">
          <select name="sort" value={sort} onChange={onChange}>
            <option value="asc">먼일순</option>
            <option value="desc">가까운일순</option>
          </select>
        </div>
      </section>
      <section>
        <div className="cards-wrap">
          <h3>Working</h3>
          <div className="todo-card-wrap">
            {doneTrueTodos.map((isDoneItem) => {
              const { id } = isDoneItem;
              return (
                <TodoCards
                  key={id}
                  isDoneItem={isDoneItem}
                  todoInputs={todoInputs}
                  setTodoInputs={setTodoInputs}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="cards-wrap">
          <h3>Done</h3>
          <div className="todo-card-wrap">
            {doneFalseTodos.map((isDoneItem) => {
              const { id } = isDoneItem;
              return (
                <TodoCards
                  key={id}
                  isDoneItem={isDoneItem}
                  todoInputs={todoInputs}
                  setTodoInputs={setTodoInputs}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoCardsList;
