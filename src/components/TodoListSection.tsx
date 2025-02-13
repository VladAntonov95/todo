import { FC, useState } from "react";
import { TodoListPros } from "@/types/todoList";
import { Todo } from "@/types/todo";

const TodoListSection: FC<TodoListPros> = ({
  todos,
  removeTodo,
  toggleCompletion,
  updateTitle,
}) => {
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState<string>("");

  const handleRemoveClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    removeTodo(id);
  };

  const handleTodoClick = (e: React.MouseEvent, todo: Todo) => {
    e.stopPropagation();
    if (!editingTodoId) {
      toggleCompletion(todo);
    }
  };

  const handleEditClick = (e: React.MouseEvent, todo: Todo) => {
    e.stopPropagation();
    if (!todo.completed) {
      setEditingTodoId(todo.id);
      setNewTitle(todo.title);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (editingTodoId && newTitle.trim() !== "") {
      updateTitle({
        todo: todos.find((todo) => todo.id === editingTodoId)!,
        newTitle,
      });
      setEditingTodoId(null);
      setNewTitle("");
    }
  };

  const handleCancelClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingTodoId(null);
    setNewTitle("");
  };

  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-center mt-10 text-gray-500 text-4xl">
          We have not todos now.
        </p>
      ) : (
        <ul className="mt-4 space-y-2">
          {sortedTodos?.map((todo) => (
            <li
              key={todo.id}
              onClick={(e) => handleTodoClick(e, todo)}
              className={`flex justify-between items-center text-lg py-2 px-4 sm:px-6 md:px-10 rounded-lg ${
                todo.completed
                  ? "bg-green-200 line-through text-gray-500"
                  : "bg-gray-200"
              }`}
            >
              {editingTodoId === todo.id ? (
                <div className="flex flex-wrap w-full gap-2 sm:gap-4">
                  <input
                    type="text"
                    value={newTitle}
                    onChange={handleTitleChange}
                    onClick={(e) => e.stopPropagation()}
                    className="text-lg py-3 px-6 rounded-lg mr-2 w-full min-w-[200px] sm:w-3/4 md:w-[60%]"
                  />
                  <div className="flex w-full sm:w-auto gap-2">
                    <button
                      onClick={handleSaveClick}
                      className="bg-black text-white px-4 py-2 rounded w-full sm:w-auto"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelClick}
                      className="bg-gray-500 text-white px-4 py-2 rounded w-full sm:w-auto"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <span className="cursor-pointer w-full text-left">
                    {todo.title}
                  </span>
                  <div className="flex gap-4 sm:gap-6">
                    <button
                      onClick={(e) => handleRemoveClick(e, todo.id)}
                      className="bg-inherit text-white px-2 py-1 rounded border-2 border-black border-opacity-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#5f6368"
                      >
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => handleEditClick(e, todo)}
                      disabled={todo.completed}
                      className="bg-inherit text-white px-2 py-1 rounded border-2 border-black border-opacity-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#5f6368"
                      >
                        <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoListSection;
