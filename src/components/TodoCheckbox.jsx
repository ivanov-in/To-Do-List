import React from "react";
import PropTypes from "prop-types";
import { BsCheck } from "react-icons/bs";
import cn from "classnames";
import { useState } from "react";

const TodoCheckbox = ({ isCompleted, clickCheckboxHandler }) => {
  const [isCheckboxActive, setIsCheckboxActive] = useState(isCompleted);

  return (
    <button
      className={cn("border-2 rounded-md w-7 h-7 border-green-600 mr-3", {
        "bg-green-400": isCheckboxActive,
      })}
      onClick={clickCheckboxHandler}
    >
      {isCheckboxActive && <BsCheck size={24} className="text-gray-900" />}
    </button>
  );
};

TodoCheckbox.propTypes = {
  isCompleted: PropTypes.bool,
  clickHandler: PropTypes.func,
};

export { TodoCheckbox };
