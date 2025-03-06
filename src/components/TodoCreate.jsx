import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

const TodoCreate = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const HandleSubmit = () => {
    if (!todo.trim()) return;
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      todo: todo,
    };
    dispatch(addTodo(newTodo));
  };
  console.log(typeof todo);
  return (
    <div className="flex items-center justify-center w-full mt-20  gap-4 ">
      <input
        type="text"
        placeholder="Todo Giriniz."
        className="outline-none border border-gray-400 rounded-md md:w-1/3 px-2 text-center shadow-md shadow-gray-600 hover:border-yellow-500 transition duration-300 hover:text-yellow-500"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="bg-yellow-500 text-white p-2  rounded-md font-bold hover:bg-white hover:text-yellow-500 transition duration-300 md:w-1/4 shadow-md shadow-gray-600 cursor-pointer "
        onClick={HandleSubmit}
      >
        Todo Oluştur
      </button>
    </div>
  );
};

export default TodoCreate;
