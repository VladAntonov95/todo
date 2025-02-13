import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "@/types/todo";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async (): Promise<Todo[]> => {
  const { data } = await axios.get<Todo[]>(`${API_URL}?_limit=10`);
  return data;
};

export const createTodo = async (title: string): Promise<Todo> => {
  const newTodo = {
    title,
    id: uuidv4(),
    completed: false,
    userId: 1,
  };

  // if we work with normal server not jsonplaceholder we can sednd todo to server
  // const sendTodoToServer = async (todo: Todo): Promise<Todo> => {
  //   const response = await axios.post(
  //     "https://jsonplaceholder.typicode.com/todos",
  //     todo
  //   );
  //   return response.data;
  // };
  // await sendTodoToServer(newTodo);

  return newTodo;
};

// delete from server
// in our case we fetch static data from jsonplaceholder, thats why we cant delete this from server
export const deleteTodo = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const updateTodoCompletion = async (todo: Todo): Promise<Todo> => {
  const updatedTodo = {
    ...todo,
    completed: !todo.completed,
  };
  return updatedTodo;

  // if we want to change server data not only cache we need to use this:
  // const response = await axios.put<Todo>(`${API_URL}/${todo.id}`, updatedTodo);
  // return response.data;
};

export const updateTitle = async ({
  todo,
  newTitle,
}: {
  todo: Todo;
  newTitle: string;
}): Promise<Todo> => {
  const updatedTodo = {
    ...todo,
    title: newTitle, // меняем только текст задачи
  };

  return updatedTodo;

  // if we want to change server data not only cache we need to use this:
  // const response = await axios.put<Todo>(`${API_URL}/${todo.id}`, updatedTodo);
  // return response.data;
};
