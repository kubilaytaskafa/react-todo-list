import { createSlice } from "@reduxjs/toolkit";

// LocalStorage'dan todo verilerini al
const loadTodosFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : []; // Eğer LocalStorage'da veri varsa, onları döneriz; yoksa boş bir dizi döneriz.
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: loadTodosFromLocalStorage(), // Uygulama açıldığında LocalStorage'dan verileri yükle
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos)); // Yeni todo eklediğimizde LocalStorage'a kaydet
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos)); // Todo silindiğinde LocalStorage'ı güncelle
    },
    editTodo: (state, action) => {
      const { id, newTodo } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        state.todos[todoIndex].todo = newTodo;
        localStorage.setItem("todos", JSON.stringify(state.todos)); // Todo düzenlendiğinde LocalStorage'ı güncelle
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
