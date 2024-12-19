import React from 'react'
import './App.css'
import Button from './components/Button'
import { FcGoogle } from "react-icons/fc";



function App() {

  return (
    <main>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="sm" variant="success">Success</Button>
      <Button size="lg" variant="warning">Warning</Button>
      <Button size="lg" variant="danger">Danger</Button>
    </main >
  )
}

export default App
