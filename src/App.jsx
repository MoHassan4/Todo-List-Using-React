import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import styles from "./App.module.css";
import { TodoFilters } from "./components/TodoFilters/TodoFilters";
import { useTodos } from "./hooks/useTodos";
import { Loader } from "./components/Loader/Loader";
import { Alert } from "./components/Alert/Alert";
import { useState ,useEffect} from "react";

function App() {
  const todos = useTodos()


  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src="/to-do.png" alt="Logo" className={styles.Logo} />
        <h2 className={styles.Title}>To-Do App</h2>
      </header>

      <div className={styles.AppContainer}>
        {todos.isLoading && <Loader/>}
        {!!todos.error.message && (
          <Alert onClear={todos.error.clear}>{todos.error.message}</Alert>
        )}
        <TodoForm onCreate={todos.create} />
        <TodoFilters onFilter={todos.filter} />
        <TodoList
          todos={todos.data}
          onUpdate={todos.update}
          onDelete={todos.delete}
        />
      </div>
    </div>
  );
}

export default App;
