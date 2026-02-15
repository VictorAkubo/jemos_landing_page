import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Page from "./Page.jsx"
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <Page/>
  )
}

export default App
{/*
export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Tailwind is working!
      </h1>
    </div>
  );
}*/}
