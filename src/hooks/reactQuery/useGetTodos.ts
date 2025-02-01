import {useQuery} from "@tanstack/react-query";
import axiosClient from "../../api/axios/axiosClient.ts";
import {Todo} from "../../model/todos.ts";

const useGetTodos = () => {

    const { data: todos, error, isLoading } = useQuery({
            queryKey: ['todos'],
            queryFn: async () => {
                const response = await axiosClient.get<Todo[]>('/todos')
                return response.data
            },
            select: (data) => data.slice(0, 10)
        }
    )

    return {todos, error, isLoading}
}

export default useGetTodos;