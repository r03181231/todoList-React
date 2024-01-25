import TodoCards from "view/main/todoCards/TodoCards";

const CardTemp = ({ isDoneState, isDoneArr, setTodoInputs }) => {
  return (
    <section>
      <div className="cards-wrap">
        <h3>{isDoneState ? "Working" : "Done"}</h3>
        <div className="todo-card-wrap">
          {isDoneArr.map((isDoneItem) => {
            const { id } = isDoneItem;
            return (
              <TodoCards
                key={id}
                isDoneItem={isDoneItem}
                setTodoInputs={setTodoInputs}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardTemp;
