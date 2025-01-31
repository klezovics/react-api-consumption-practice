import React, {useEffect, useState} from 'react';
import {Todo} from "../model/todos.ts";
import ToDoList from "./ToDoList.tsx";
import axios from 'axios';
import axiosClient from "../api/axiosClient.ts";


// Case 1: Using fetch API to fetch data
async function getTodosFetch() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return response.json();
}


// Case 2: Using Axios to fetch data
async function getTodosAxios() {
    const response = await axiosClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
    return response.data;
}

const ToDoListFetchOrAxios = () => {

    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchTodos = async () => {
            setIsLoading(true);
            try {

                // There is very little difference for component structure if we
                // use fetch or axios here
                const todos = (await getTodosFetch()).slice(0,10);
                // const todos = (await getTodosAxios()).slice(0,10);
                setTodos(todos);
            } catch (e) {
                console.error('Error fetching todos:', e);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTodos();
    }, []);

    return (
        <div>
            <ToDoList todos={todos} />
        </div>
    );
};

export default ToDoListFetchOrAxios;