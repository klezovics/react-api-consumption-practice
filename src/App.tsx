import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoListFetch from "./components/ToDoListFetch.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDoListFetch/>
    </>
  )
}

export default App
