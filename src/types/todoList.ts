import { Todo } from "./todo";

export type TodoListPros = {
  todos: Todo[];
  removeTodo: (id: string) => void;
  toggleCompletion: (todo: Todo) => void;
  updateTitle: (params: { todo: Todo; newTitle: string }) => void;
};
