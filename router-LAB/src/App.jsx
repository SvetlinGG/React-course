
import {Routes, Route, Link} from 'react-router';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';
import City from './components/City';
import Redirect from './components/Readirect';
import Dashboard from './components/AdminDashboard';
import Users from './components/AdminUsers';
import Posts from './components/AdminPosts';
import Admin from './components/Admin';
import Layout from './components/Layout';
import { useState } from 'react';
import RouteGuard from './components/RouteGuard';
import Profile from './components/Profile';
import Login from './components/Login';
//import styles from '/App.module.css'

function App() {

  const [user, setUser] = useState({
    username: 'Svetlin',
    role: 'Admin'

  })
  

  return (
    <>
      <h1>React Router</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cities/pleven">City</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      {/* <nav>
        <NavLink className={({isActive}) => isActive ? styles['selected-link'] : ''}  to="/">Home</NavLink>
        <NavLink className={ ({isActive}) => isActive ? styles['selected-link'] : 'blue'}  to="/about">About</NavLink>
        <NavLink className={({isActive}) => isActive ? styles['selected-link'] : 'red'} to="cities/pleven">City</NavLink>
      </nav> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/redirect' element={<Redirect />} />
        <Route path='/cities/:city' element={<City />} />
        <Route path='/login' element={<Login />} />

        <Route path='/admin' element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='users' element={<Users />} />
          <Route path='posts' element={<Posts />} />
        </Route>
        
        <Route path='*' element={<NotFound />} />

        <Route element={<Layout />}>
          <Route path='/layout-demo' element={<h3>Indside Layout</h3>} />
        </Route>

        <Route element={<RouteGuard user={user}/>}>
          <Route path='/profile' element={<Profile user={user} />} />
        </Route>
      </Routes>

      


    </>
  )
}

export default App
