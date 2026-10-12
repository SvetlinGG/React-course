import { useNavigate } from 'react-router'
import { Route, Routes } from "react-router"
import Catalog from "./components/Catalog"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home";
import Details from "./components/Details";
import Register from "./components/Register";
import Login from "./components/Login";
import Create from "./components/Create";
import { useState } from "react";





function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const userAuthHandler = (userData) => {

    console.log('User Authenticated:', userData);
    setUser(userData);
  }

  const logoutHandler = () => {
    setUser(null);
    navigate('/');
  }

  

  return (
    <>
      <Header isAuthenticated={!!user} />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="/games/:gameId" element={<Details />} />
        <Route path="/register" element={<Register onRegister={userAuthHandler} user={user} />} />
        <Route path="/login" element={<Login onLogin={userAuthHandler} user={user} />} />
        <Route path="/logout" action={logoutHandler} />
        <Route path="/create" element={<Create />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
