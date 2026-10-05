import { Route, Routes } from 'react-router';
import UncontrolledLogin from "./uncontrolled-login/UncontrolledLogin";
import ControlledLogin from "./controlled-login/ControlledLogin";
import Navbar from "./navbar/Navbar";


function App() {
  

  return (
    <>
     <Navbar />

     <Routes>
        <Route path="/uncontrolled-form" element={<UncontrolledLogin />} />
        <Route path='/controlled-form' element={<ControlledLogin />} />
     </Routes>
    </>
  )
}

export default App
