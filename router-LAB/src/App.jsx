
import {Routes, Route} from 'react-router';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';
import City from './components/City';
import Redirect from './components/Readirect';

function App() {
  

  return (
    <>
      <h1>React Router</h1>

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
