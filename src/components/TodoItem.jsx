import React from "react";
import PropTypes from "prop-types";
import { TodoCheckbox } from "./TodoCheckbox";

const TodoItem = ({ todoData }) => {
  return (
    <div>
      <TodoCheckbox isCompleted={todoData.isCompleted} />
      {todoData.title}
    </div>
  );
};

TodoItem.propTypes = {
  todoData: PropTypes.object,
};

export { TodoItem };
