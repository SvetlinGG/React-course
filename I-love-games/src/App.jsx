import {Routes, Route} from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Catalog from './components/Catalog'
import AddGame from './components/AddGame'
import Details from './components/Details'
import Edit from './components/Edit'
import Login from './components/Login'
import Register from './components/Register'


function App() {
  

  return (
    <>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/create' element={<AddGame />} />
        <Route path='/games/:gameId' element={<Details />} />
        <Route path='/edit' element={<Edit />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
