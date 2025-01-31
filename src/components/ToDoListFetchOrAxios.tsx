import React, {useEffect, useState} from 'react';
import {Todo} from "../model/todos.ts";
import ToDoList from "./ToDoList.tsx";
import axiosClient, {BASE_URL} from "../api/axios/axiosClient.ts";


// Case 1: Using fetch API to fetch data
// + -> no need to import anything
// - -> no exceptions throw on response code != 2XX
async function getTodosFetch() {
    const response = await fetch(BASE_URL + '/todos');
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return response.json();
}


// Case 2: Using Axios to fetch data
// + can define BASE_URL in one place -> can use relative path
// + throws exception on response code != 2XX
// + can configure interceptors and headers to use
// - need to import a dependency
// - need to configure a client
async function getTodosAxios() {
    const response = await axiosClient.get<Todo[]>('/todos');
    return response.data;
}

// Lesson 1: If you want to use fetch or axios, there is a lot of boilerplate
// You need to know this react API consumption idiom with data/loading/error states
const ToDoListFetchOrAxios = () => {
    // You can potentially add some checks here to prevent setting state on an unmounted component
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTodos = async () => {
            setIsLoading(true);
            setError(null)
            try {
                // There is very little difference for component structure if we
                // use fetch or axios here
                const todos = await getTodosFetch()
                // const todos = (await getTodosAxios())
                const filteredTodos = todos.slice(0,10)
                setTodos(filteredTodos);
            } catch (e) {
                console.error('Error fetching todos:', e);
                setError('Error fetching todos.' + e,)
            } finally {
                setIsLoading(false);
            }
        };

        fetchTodos();
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <ToDoList todos={todos} />
        </div>
    );
};

export default ToDoListFetchOrAxios;