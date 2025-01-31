import useSWR from 'swr';
import {Todo} from '../model/todos.ts';
import ToDoList from './ToDoList.tsx';
import axiosClient, {BASE_URL} from '../api/axiosClient.ts';
import {useGetTodosQuery} from "../api/todoApiSlice.ts";

const ToDoListRtkQuery = () => {
    // RTK Query offers the cleanest no-arguments hook
    const { data: todos, error, isLoading } = useGetTodosQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return <ToDoList todos={todos} />;
};

export default ToDoListRtkQuery;
