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
    <div className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-8">Todo List</h1>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todoData={todo} />
      ))}
    </div>
  );
};

export { MainPage };
