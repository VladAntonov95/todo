"use client";
import Header from "@/components/Header";
import Form from "@/components/Form";
import TodoListSection from "@/components/TodoListSection";
import { useTodos } from "@/hooks/useTodos";

export default function Home() {
  const {
    todos,
    isLoading,
    error,
    addTodo,
    removeTodo,
    toggleCompletion,
    updateTitle,
  } = useTodos();

  if (isLoading)
    return (
      <p className="text-8xl flex justify-center mt-[100px]">Loading...</p>
    );
  if (error)
    return (
      <p className="text-8xl flex justify-center mt-[100px]">
        Error loading todos
      </p>
    );

  return (
    <>
      <Header />
      <main>
        <Form addTodo={addTodo} />
        <TodoListSection
          todos={todos}
          removeTodo={removeTodo}
          toggleCompletion={toggleCompletion}
          updateTitle={updateTitle} // Pass updateTitle prop
        />
      </main>
    </>
  );
}
