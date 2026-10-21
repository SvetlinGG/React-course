import {Routes, Route, NavLink } from 'react-router'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'
import City from './components/City'
import Redirect from './components/Redirect'
import AdminDashboard from './components/AdminDashboard'
import Admin from './components/Admin'
import AdminUsers from './components/AdminUsers'
import AdminPosts from './components/AdminPosts'
import { useState } from 'react'
import RouteGuard from './components/RouteGuard'
import Profile from './components/Profile'
import Login from './components/Login'


function App() {

  const [user, setUser] = useState({
    username: 'Svetlin',
    role: 'user'
  })
  

  return (
    <>
    <header className="header">
      <h1>Hello Routing!!!</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/city">City</NavLink>
        <NavLink to="/admin">Admin</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>

    <main className="content">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/city/:city' element={<City />} />
      <Route path='/redirect' element={<Redirect />} />
      <Route path='/login' element={<Login />} />

      <Route path='/admin' element={<Admin />}>
        <Route index element={<AdminDashboard />} />
        <Route path='users' element={<AdminUsers />} />
        <Route path='posts' element={<AdminPosts />} />
      </Route>

      <Route element={<RouteGuard user={user} />}>
        <Route path='/profile' element={<Profile user={user} />} />
      </Route>


      <Route path='*' element={<NotFound />} />
    </Routes>
    </main>
    </>
  )
}

export default App
