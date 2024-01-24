import "./todoCardList.css";
import TodoCards from "../todoCards/TodoCards";

export const TodoCardsList = ({ todoInputs, setTodoInputs }) => {
  const doneTrueTodos = todoInputs.filter((state) => state.isDone === true);
  const doneFalseTodos = todoInputs.filter((state) => state.isDone === false);
  return (
    <>
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
