import './assets/style/style.css'
import { Routes, Route } from 'react-router-dom'

import Intro from './pages/Intro'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Intro />} />
    </Routes>
  )
}

export default App
