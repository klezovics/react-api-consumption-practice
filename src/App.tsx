import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoListFetchOrAxios from "./components/ToDoListFetchOrAxios.tsx";
import ToDoListSWR from "./components/ToDoListSWR.tsx";
import ToDoListRtkQuery from "./components/ToDoListRtkQuery.tsx";
import {Provider} from "react-redux";
import {store} from "./api/store.ts";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    {/*<ToDoListFetchOrAxios/>*/}
                    {/*<ToDoListSWR/>*/}
                    <ToDoListRtkQuery/>
                </Provider>
            </QueryClientProvider>
        </>
    )
}

export default App
