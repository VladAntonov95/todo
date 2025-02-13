import { useState } from "react";
import { FormProps } from "@/types/form";

export default function Form({ addTodo }: FormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row mx-auto relative max-w-[500px]"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        className="border-black border rounded-lg h-[30px] p-4 w-full"
      />
      <button
        type="submit"
        className="bg-black text-white w-[100px] rounded-lg absolute h-[33px] right-0 "
      >
        Add
      </button>
    </form>
  );
}
