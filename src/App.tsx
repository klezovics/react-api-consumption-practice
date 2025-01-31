import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoListFetchOrAxios from "./components/ToDoListFetchOrAxios.tsx";
import ToDoListSWR from "./components/ToDoListSWR.tsx";
import ToDoListRtkQuery from "./components/ToDoListRtkQuery.tsx";
import {Provider} from "react-redux";
import {store} from "./api/store.ts";

function App() {

    return (
        <>
            <Provider store={store}>
                {/*<ToDoListFetchOrAxios/>*/}
                {/*<ToDoListSWR/>*/}
                <ToDoListRtkQuery/>
            </Provider>
        </>
    )
}

export default App
