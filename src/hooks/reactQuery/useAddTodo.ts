import {useMutation, useQueryClient} from "@tanstack/react-query";
import axiosClient from "../../api/axios/axiosClient.ts";

const useAddTodo = () => {
    const queryClient = useQueryClient();

    const {mutate} = useMutation({
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

    return {mutate}
}

export default useAddTodo;