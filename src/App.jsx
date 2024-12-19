import React from 'react'
import './App.css'
import Button from './components/Button'
import { FcGoogle } from "react-icons/fc";



function App() {

  return (
    <main>
      <Button style={{ color: "green" }} onClick={() => console.log("Logging in...")}>
        <FcGoogle />
        Log in with Google
      </Button>
    </main>
  )
}

export default App
