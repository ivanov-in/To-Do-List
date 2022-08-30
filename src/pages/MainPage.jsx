import React from "react";
import { TodoItem } from "../components/TodoItem";

const todos = [
  {
    id: "1",
    title: "First todo",
    isCompleted: false,
  },
  {
    id: "2",
    title: "Second todo",
    isCompleted: false,
  },
  {
    id: "3",
    title: "Third todo",
    isCompleted: false,
  },
];

const MainPage = () => {
  return (
    <div className="bg-gray-900 h-screen text-white w-4/5 mx-auto">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todoData={todo} />
      ))}
    </div>
  );
};

export { MainPage };
