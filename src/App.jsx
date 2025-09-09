import './assets/style/style.css'
import { Routes, Route } from 'react-router-dom'

import Intro from './pages/Intro'
import Main from './pages/Main'
import About from './pages/About'
import Contact from './pages/Contact'
import Work from './pages/Work'
import Work1 from './pages/Work1'
import Work2 from './pages/Work2'
import Work3 from './pages/Work3'
import NotFound from './pages/Error'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Intro />} />
      <Route path='/main' element={<Main />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/work' element={<Work />}></Route>
      <Route path='/work1' element={<Work1 />}></Route>
      <Route path='/work2' element={<Work2 />}></Route>
      <Route path='/work3' element={<Work3 />}></Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
