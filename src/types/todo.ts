export type Todo = {
  userId: number;
  id: string; // because we use manual uuid id
  title: string;
  completed: boolean;
};
