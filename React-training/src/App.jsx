import Home from './components/Home'
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import MyCollection from './components/MyCollection'

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route patn='/my-collection' element={<MyCollection />} />
      </Routes>
    </>
  )
}

export default App
