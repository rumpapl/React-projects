import { useContext } from "react";
import { TodoContext } from "./provider";

const useTodo = () => {
  const todo_context = useContext(TodoContext);
  return { ...todo_context };
};

export default useTodo;
