import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoListFetchOrAxios from "./components/ToDoListFetchOrAxios.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDoListFetchOrAxios/>
    </>
  )
}

export default App
