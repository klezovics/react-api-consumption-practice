import React from 'react';
import ToDo from "./ToDo.tsx";

const ToDoList = ({todos}) => {
    return (
        <ul>
            {todos.map((todo) => {
                return <ToDo title={todo.title} key={todo.id} />;
            })}
        </ul>
    );
};

export default ToDoList;