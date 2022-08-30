import React from "react";
import PropTypes from "prop-types";
import { TodoCheckbox } from "./TodoCheckbox";

const TodoItem = ({ todoData }) => {
  return (
    <button className="flex items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
      <TodoCheckbox isCompleted={todoData.isCompleted} />
      {todoData.title}
    </button>
  );
};

TodoItem.propTypes = {
  todoData: PropTypes.object,
};

export { TodoItem };
