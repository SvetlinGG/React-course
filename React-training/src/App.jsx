import Home from './components/Home'
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import MyCollection from './components/MyCollection'
import { useState } from 'react';
import Details from './components/Details';
import Search from './components/Search';

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
        <Route path='/' element={<Home collection={collection} onToggle={toggleAlbum} />} />
        <Route path='/my-collection' element={<MyCollection collection={collection} onToggle={toggleAlbum} />} />
        <Route path='/details/:artistId' element={<Details />} />
        <Route path='/search' element={<Search collection={collection} onToggle={toggleAlbum} />} />
        
      </Routes>
    </>
  )
}

export default App
