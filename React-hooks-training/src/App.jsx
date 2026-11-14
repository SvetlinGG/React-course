import {Routes, Route } from 'react-router';
import Header from './components/Header';
import MusicCatalog from './components/MusicCatalog';

function App() {
  

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<MusicCatalog />} />
    </Routes>
    </>
  )
}

export default App
