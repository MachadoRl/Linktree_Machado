import { Background } from './components/Background/Index'
import { Card } from './components/Card/Index'

import './App.css'

function App() {
  return (
    <>
      <Background />
      <div className="realtive z-10 min-h-screen flex items-center justify-center">
        <Card />
      </div>
    </>
  )
}

export default App
