import {Routes, Route} from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Catalog from './components/Catalog'
import AddGame from './components/AddGame'


function App() {
  

  return (
    <>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/create' element={<AddGame />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
