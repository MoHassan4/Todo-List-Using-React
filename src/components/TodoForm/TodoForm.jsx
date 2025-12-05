import { useState,useEffect } from "react";
import { PRIORITY_DEFAULT } from "../../constants/priorities";
import { getTodosSchema } from "../../schemas/todo";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./TodoForm.module.css";
import { TodoFormFields } from "../TodoFormFields/TodoFormFields";
import { useForm } from "react-hook-form";

export function TodoForm({ onCreate }) {
  
  const [showAllFields, SetShowAllFields] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(getTodosSchema({ isNew: true })),
    defaultValues: {
      description: "",
      deadline: "",
      priority: PRIORITY_DEFAULT,
      completed: false,
    },
  });

  function handleCreate(data) {
    onCreate(data);
    reset();
  }
  return (
    <section>
      <h3 className={styles.Title}>
        New To-Do
        <button onClick={() => SetShowAllFields(!showAllFields)}>
          {showAllFields ? "Hide" : "Show"} All Fields
        </button>
      </h3>

      <form className={styles.Form} onSubmit={handleSubmit(handleCreate)}>
        <TodoFormFields
          showAllFields={showAllFields}
          register={register}
          errors={errors}
        />
        <input type="submit" value="Add" />
      </form>
    </section>
  );
}
