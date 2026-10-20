import {Routes, Route } from 'react-router'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'


function App() {
  

  return (
    <>
    <h1>Hello Routing!!!</h1>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
