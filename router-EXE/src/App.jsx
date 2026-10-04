import { Route, Routes } from "react-router"
import Catalog from "./components/Catalog"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Details from "./components/Details";




function App() {
  

  return (
    <>
      <Header />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="create" element={<Create />} />
        <Route path="/games/:gameId" element={<Details />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
