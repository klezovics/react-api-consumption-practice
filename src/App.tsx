import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoListFetchOrAxios from "./components/container/ToDoListFetchOrAxios.tsx";
import ToDoListSWR from "./components/container/ToDoListSWR.tsx";
import ToDoListRtkQuery from "./components/container/ToDoListRtkQuery.tsx";
import {Provider} from "react-redux";
import {store} from "./api/redux/store.ts";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ToDoListReactQuery from "./components/container/ToDoListReactQuery.tsx";

const queryClient = new QueryClient()

function App() {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    {/*<ToDoListFetchOrAxios/>*/}
                    {/*<ToDoListSWR/>*/}
                    {/*<ToDoListRtkQuery/>*/}
                    <ToDoListReactQuery/>
                </Provider>
            </QueryClientProvider>
        </>
    )
}

export default App
