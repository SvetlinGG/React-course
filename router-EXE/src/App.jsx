import { Route, Routes } from "react-router"
import Catalog from "./components/Catalog"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home";
import Login from "./components/Login"




function App() {
  

  return (
    <>
      <Header />
      <Home />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
