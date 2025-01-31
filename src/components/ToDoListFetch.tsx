import React, {useEffect, useState} from 'react';
import {Todo} from "../model/todos.ts";
import ToDoList from "./ToDoList.tsx";


async function getTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return response.json();
}

const ToDoListFetch = () => {

    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchTodos = async () => {
            setIsLoading(true);
            try {
                const todos = (await getTodos()).slice(0,10);
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

export default ToDoListFetch;