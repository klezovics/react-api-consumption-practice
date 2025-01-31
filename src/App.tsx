import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoListFetchOrAxios from "./components/ToDoListFetchOrAxios.tsx";
import ToDoListSWR from "./components/ToDoListSWR.tsx";

function App() {

  return (
    <>
      {/*<ToDoListFetchOrAxios/>*/}
      <ToDoListSWR/>
    </>
  )
}

export default App
