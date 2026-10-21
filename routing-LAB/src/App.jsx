import {Routes, Route, Link } from 'react-router'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'
import City from './components/City'
import Redirect from './components/Redirect'
import AdminDashboard from './components/AdminDashboard'
import Admin from './components/Admin'
import AdminUsers from './components/AdminUsers'
import AdminPosts from './components/AdminPosts'


function App() {
  

  return (
    <>
    <h1>Hello Routing!!!</h1>

    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/city">City</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/city/:city' element={<City />} />
      <Route path='/redirect' element={<Redirect />} />

      <Route path='/admin' element={<Admin />}>
        <Route index element={<AdminDashboard />} />
        <Route path='users' element={<AdminUsers />} />
        <Route path='posts' element={<AdminPosts />} />
      </Route>


      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
