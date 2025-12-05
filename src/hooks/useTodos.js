import { useEffect, useState } from "react";
import { api } from "../api";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});
  const [errorMesssage, setErrorMessage] = useState();
  const [isLoading , setIsLoading] = useState(false)

  async function fetchTodos() {
    try {
        setIsLoading(true)
      const data = await api.todos.getAll(filters);
      setTodos(data);
    } catch (error) {
      setErrorMessage("Error in fetching data");
    }finally{
        setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTodos();
  }, [filters]);

  async function handleCreate(newtodo) {
    try {
        setIsLoading(true)
      await api.todos.create(newtodo);
      await fetchTodos();
    } catch (error) {
      setErrorMessage("Error in Create todo");
    }finally{
        setIsLoading(false)
    }
  }

  async function handleUpdate(id, newtodo) {
    try {
        setIsLoading(true)
      await api.todos.update(id, newtodo);
      await fetchTodos();
    } catch (error) {
      setErrorMessage("Error in Update todo");
    }finally{
        setIsLoading(false)
    }
  }

  async function handleDelete(id) {
    try {
        setIsLoading(true)
      await api.todos.delete(id);
      await fetchTodos();
    } catch (error) {
      setErrorMessage("Error in Delete todo");
    }finally{
        setIsLoading(false)
    }
  }

  return {
    isLoading,
    data: todos,
    fetch: fetchTodos,
    filter: setFilters,
    create: handleCreate,
    update: handleUpdate,
    delete: handleDelete,
    error: {
      message: errorMesssage,
      clear: () => setErrorMessage(),
    },
  };
}
