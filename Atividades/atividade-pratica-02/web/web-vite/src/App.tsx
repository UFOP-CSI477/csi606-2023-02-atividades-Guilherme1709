import { useState } from 'react'
import Menu from './components/menu/Menu.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Menu />
    </div>
  )
}

export default App
