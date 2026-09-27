
import {Routes, Route} from 'react-router';
import About from './components/About';

function App() {
  

  return (
    <>
      <h1>React Router</h1>

      <Routes>
        <Route path='/' element={<h1>Main Page</h1>} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
