import React from 'react';
import ToDo from "./ToDo.tsx";

const ToDoList = ({todos, addToDo}) => {
    return (
        <>
            <ul>
                {todos.map((todo) => {
                    return <ToDo title={todo.title} key={todo.id}/>;
                })}
            </ul>
            {addToDo && <button onClick={addToDo}>Add new todo</button>}
        </>
    );
};

export default ToDoList;