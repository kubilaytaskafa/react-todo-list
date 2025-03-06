import { useState } from "react";
import { CiCircleRemove, CiEdit, CiCirclePlus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../redux/slices/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const TodoList = useSelector((state) => state.todos.todos);

  const [changedTodo, setChangedTodo] = useState(""); // Düzenlenmiş todo'nun değeri
  const [editTodoId, setEditTodoId] = useState(null); // Hangi todo düzenleniyor

  const DeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const EditTodo = (id, newTodo) => {
    if (newTodo.trim()) {
      dispatch(editTodo({ id, newTodo })); // Todo'yu Redux store'a güncelle
      setEditTodoId(null); // Düzenlemeyi bitir
    }
  };

  return (
    <>
      {TodoList &&
        TodoList.map((todo) => (
          <div
            className="flex items-center justify-between py-2 w-full border max-w-2xl border-yellow-400 rounded-md shadow-md shadow-yellow-600 ml-10 mr-10 mt-10"
            key={todo.id}
          >
            <div className="flex-1 px-10">
              {editTodoId === todo.id ? (
                <input
                  type="text"
                  className="outline-none border border-yellow-400 rounded-md shadow-md shadow-yellow-600 w-full px-2"
                  value={changedTodo}
                  onChange={(e) => setChangedTodo(e.target.value)} // Input değeri değiştikçe state'i güncelle
                />
              ) : (
                <div>{todo.todo}</div>
              )}
            </div>

            <div className="flex items-center gap-4 justify-center md:text-2xl w-1/4">
              <CiEdit
                className="cursor-pointer hover:text-yellow-500 transition duration-300 text-2xl md:text-4xl"
                onClick={() => {
                  setEditTodoId(todo.id); // Düzenlemeye başla
                  setChangedTodo(todo.todo); // Mevcut todo'yu input'a aktar
                }}
              />
              {editTodoId === todo.id ? (
                <CiCirclePlus
                  className="cursor-pointer hover:text-yellow-500 transition duration-300 text-2xl md:text-4xl"
                  onClick={() => EditTodo(todo.id, changedTodo)} // Düzenlemeyi kaydet
                />
              ) : (
                <CiCircleRemove
                  className="cursor-pointer hover:text-yellow-500 transition duration-300 text-2xl md:text-4xl"
                  onClick={() => DeleteTodo(todo.id)} // Todo sil
                />
              )}
            </div>
          </div>
        ))}
    </>
  );
};

export default Todo;
