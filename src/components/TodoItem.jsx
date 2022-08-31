import React, { useState } from "react";
import PropTypes from "prop-types";
import { TodoCheckbox } from "./TodoCheckbox";
import cn from "classnames";

const TodoItem = ({ todoItem }) => {
  const [todoData, setToDoData] = useState(todoItem);

  const CheckboxContext = React.createContext(todoData.isCompleted);

  const clickCheckboxHandler = () => {
    const copyTodo = Object.assign({}, todoData);
    copyTodo.isCompleted = !todoData.isCompleted;
    setToDoData(copyTodo);
  };

  return (
    <div
      className={cn(
        "flex items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full",
        { "line-through": todoData.isCompleted }
      )}
    >
      <CheckboxContext.Provider value={todoData.isCompleted}>
        <TodoCheckbox
          isCompleted={todoData.isCompleted}
          clickCheckboxHandler={clickCheckboxHandler}
        />
      </CheckboxContext.Provider>
      {todoData.title}
    </div>
  );
};

TodoItem.propTypes = {
  todoItem: PropTypes.object,
};

export { TodoItem };
