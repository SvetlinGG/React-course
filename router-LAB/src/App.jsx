
import {Routes, Route, Link, NavLink} from 'react-router';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';
import City from './components/City';
import Redirect from './components/Readirect';

function App() {
  

  return (
    <>
      <h1>React Router</h1>

      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="cities/pleven">City</Link>
      </nav> */}

      <nav>
        <NavLink style={{color: 'green'}} to="/">Home</NavLink>

        <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'blue'})} to="/about">About</NavLink>
        
        <NavLink style={({isActive}) => ({color: isActive ? 'green' : 'yellow'})} to="cities/pleven">City</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/redirect' element={<Redirect />} />
        <Route path='/cities/:city' element={<City />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
