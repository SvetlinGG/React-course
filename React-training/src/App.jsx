import Home from './components/Home'
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import MyCollection from './components/MyCollection'
import { useState } from 'react'

function App() {
  const [collection, setCollection] = useState([]);
  const toggleAlbum = (album) =>
  setCollection(prev =>
    prev.some(a => a.id === album.id)
      ? prev.filter(a => a.id !== album.id)
      : [...prev, album]
  );


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
