import {Routes, Route } from 'react-router';
import Header from './components/Header';
import MusicCatalog from './components/MusicCatalog';
import MyCollection from './components/MyCollection';
import { useState } from 'react';

function App() {
  const [collection, setCollection] = useState([]);

    const toggleAlbum = (album) => {
        setCollection(prev =>
            prev.some(a => a.id === album.id)
            ? prev.filter(a => a.id !== album.id)
            : [...prev, album]
        )
      }
  

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<MusicCatalog collection={collection} onToggle={toggleAlbum} />} />
      <Route path='/collection' element={<MyCollection collection={collection} onToggle={toggleAlbum} />} />
    </Routes>
    </>
  )
}

export default App
