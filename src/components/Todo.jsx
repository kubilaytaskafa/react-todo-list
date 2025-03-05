import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
const Todo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [Todo, setTodo] = useState("Todo");
  const [editTodo, setEditTodo] = useState("Todo");
  const ChangeTodo = () => {
    setTodo(editTodo);
    setIsEditing(false);
  };
  return (
    <div className="flex items-center justify-between py-2 w-full  border max-w-2xl border-yellow-400 rounded-md shadow-md shadow-yellow-600 ml-10 mr-10 ">
      <div className="flex-1 px-10">
        {isEditing ? (
          <input
            type="text"
            className="outline-none border border-yellow-400 rounded-md shadow-md shadow-yellow-600 w-full px-2"
            placeholder={Todo}
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : (
          {}
        )}
      </div>
      <div className="flex items-center gap-4 justify-center md:text-2xl  w-1/4">
        <CiEdit
          className="cursor-pointer hover:text-yellow-500 transition duration-300  text-2xl md:text-4xl"
          onClick={() => setIsEditing(true)}
        />
        {isEditing ? (
          <CiCirclePlus
            className="cursor-pointer hover:text-yellow-500 transition duration-300  text-2xl md:text-4xl "
            onClick={ChangeTodo}
          />
        ) : (
          <CiCircleRemove className="cursor-pointer hover:text-yellow-500 transition duration-300  text-2xl md:text-4xl " />
        )}
      </div>
    </div>
  );
};

export default Todo;
