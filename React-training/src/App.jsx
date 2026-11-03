import Home from './components/Home'
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
