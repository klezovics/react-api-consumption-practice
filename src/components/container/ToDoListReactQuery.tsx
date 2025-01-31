import useSWR from 'swr';
import {Todo} from '../../model/todos.ts';
import ToDoList from '../presentation/ToDoList.tsx';
import axiosClient, {BASE_URL} from '../../api/axios/axiosClient.ts';
import { useQuery} from "@tanstack/react-query";

const ToDoListReactQuery = () => {

    const { data: todos, error, isLoading } = useQuery({
            queryKey: ['todos'],
            queryFn: async () => {
                const response = await axiosClient.get<Todo[]>('/todos')
                return response.data
            },
            select: (data) => data.slice(0, 10)
        }
    )

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return <ToDoList todos={todos} />;
};

export default ToDoListReactQuery;
