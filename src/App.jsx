import React from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
const App = () => {
  return (
    <main className="flex flex-col  items-center   h-screen w-full">
      <TodoCreate />
      <TodoList />
    </main>
  );
};

export default App;
