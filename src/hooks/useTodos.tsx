import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchTodos,
  createTodo,
  deleteTodo,
  updateTodoCompletion,
  updateTitle,
} from "@/services/todoService";
import { Todo } from "@/types/todo";

export const useTodos = () => {
  const queryClient = useQueryClient();

  const {
    data: todos = [],
    isLoading,
    error,
  } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 1000 * 60 * 60,
  });

  // working only with cache
  const addMutation = useMutation<Todo, Error, string>({
    mutationFn: createTodo,
    onSuccess: (newTodo) => {
      queryClient.setQueryData<Todo[]>(["todos"], (old = []) => [
        ...old,
        newTodo,
      ]);
    },
  });

  const removeMutation = useMutation<void, Error, string>({
    mutationFn: deleteTodo,
    onSuccess: (_, id) => {
      queryClient.setQueryData<Todo[]>(["todos"], (old = []) =>
        old.filter((todo) => todo.id !== id)
      );
    },
  });

  const toggleCompletionMutation = useMutation<Todo, Error, Todo>({
    mutationFn: updateTodoCompletion,
    onSuccess: (updatedTodo) => {
      queryClient.setQueryData<Todo[]>(["todos"], (oldTodos = []) =>
        oldTodos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        )
      );
    },
  });

  const updateTitleMutation = useMutation<
    Todo,
    Error,
    { todo: Todo; newTitle: string }
  >({
    mutationFn: updateTitle,
    onSuccess: (updatedTodo) => {
      queryClient.setQueryData<Todo[]>(["todos"], (oldTodos = []) =>
        oldTodos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        )
      );
    },
  });

  return {
    todos,
    isLoading,
    error,
    addTodo: addMutation.mutate,
    removeTodo: removeMutation.mutate,
    toggleCompletion: toggleCompletionMutation.mutate,
    updateTitle: updateTitleMutation.mutate, // The updated function here
  };
};
