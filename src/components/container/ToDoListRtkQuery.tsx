import useSWR from 'swr';
import {Todo} from '../../model/todos.ts';
import ToDoList from '../presentation/ToDoList.tsx';
import axiosClient, {BASE_URL} from '../../api/axios/axiosClient.ts';
import { useQuery} from "@tanstack/react-query";
import {useGetTodosQuery} from "../../api/redux/todoApiSlice.ts";

const ToDoListRtkQuery = () => {
    const { data: todos, error, isLoading } = useGetTodosQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return <ToDoList todos={todos} />;
};

export default ToDoListRtkQuery;
