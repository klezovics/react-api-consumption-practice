import useSWR from 'swr';
import {Todo} from '../../model/todos.ts';
import ToDoList from '../presentation/ToDoList.tsx';
import axiosClient, {BASE_URL} from '../../api/axios/axiosClient.ts';
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import useGetTodos from "../../hooks/reactQuery/useGetTodos.ts";
import useAddTodo from "../../hooks/reactQuery/useAddTodo.ts";

const ToDoListReactQuery = () => {
    const {todos, error, isLoading} = useGetTodos();
    const {mutate} = useAddTodo();

    const handleAddTodo = () => {
        mutate(100)
    }


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return <ToDoList todos={todos} addToDo={handleAddTodo}/>;
};

export default ToDoListReactQuery;
