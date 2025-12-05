import { useEffect, useState } from "react";
import styles from "./TodoFilters.module.css";
import { COMPLETED_FILTERS, PRIORITY_FILTERS } from "../../constants/filters";

export function TodoFilters({onFilter}) {
  const [completed, setCompleted] = useState("all");
  const [priority, setPriority] = useState("all");

  useEffect(()=>{
    const filters = {
        completed : COMPLETED_FILTERS[completed].value,
        priority : PRIORITY_FILTERS[priority]?.value
    }

    onFilter(filters)
  },[completed,priority])
  return (
    <section>
      <h3>Filters</h3>

      <div className={styles.Filters}>
        <label htmlFor="completed">Completed</label>
        <select
          name="completed"
          id="completed"
          defaultValue={completed}
          onChange={(e) => setCompleted(e.target.value)}
        >
          {Object.entries(COMPLETED_FILTERS).map(([key, {label}]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>

        <label htmlFor="priority">Priority</label>
        <select
          name="priority"
          id="priority"
          defaultValue={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          {Object.entries(PRIORITY_FILTERS).map(([key, {value}]) => (
            <option key={key} value={value}>
              {key}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
