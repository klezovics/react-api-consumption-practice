import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Todo } from '../../model/todos.ts';
import {BASE_URL} from "../axios/axiosClient.ts";

export const todoApiSlice = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getTodos: builder.query<Todo[], void>({
            query: () => '/todos',
            transformResponse: (response: Todo[]) => response.slice(0, 10),
        }),
    }),
});

export const { useGetTodosQuery } = todoApiSlice;
