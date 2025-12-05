import { TodoListItem } from '../TodoListItem/TodoListItem';
import styles from "./TodoList.module.css";

export function TodoList({ todos ,onUpdate , onDelete}) {
  return (
    <section>
      <h3>To Do's</h3>
      {!todos.length && <p>Sorry You Don't Have Any Todo's</p>}

      <ul className={styles.TodoList}>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
        ))}
      </ul>
    </section>
  );
}
