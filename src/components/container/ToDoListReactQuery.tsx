import useSWR from 'swr';
import {Todo} from '../../model/todos.ts';
import ToDoList from '../presentation/ToDoList.tsx';
import axiosClient, {BASE_URL} from '../../api/axios/axiosClient.ts';
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

const ToDoListReactQuery = () => {
    const queryClient = useQueryClient();

    const { data: todos, error, isLoading } = useQuery({
            queryKey: ['todos'],
            queryFn: async () => {
                const response = await axiosClient.get<Todo[]>('/todos')
                return response.data
            },
            select: (data) => data.slice(0, 10)
        }
    )

    const {mutate, isPending } = useMutation({
        mutationFn: async (id:number) => {
            await axiosClient.post(`/todos/`, {id})
        },
        onSuccess: () => {
            // After adding new data to API, let's invalidate the cache
            // so the user can get updated data
            queryClient.invalidateQueries({queryKey: ['todos']})
            console.log('Mutation successful!')
        }
    })

    const handleAddTodo = () => {
        mutate(100)
    }


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return <ToDoList todos={todos} addToDo={handleAddTodo} />;
};

export default ToDoListReactQuery;
