import { Route, Routes } from 'react-router';
import UncontrolledLogin from "./uncontrolled-login/UncontrolledLogin";
import ControlledLogin from "./controlled-login/ControlledLogin";
import Navbar from "./navbar/Navbar";
import UnifiedControlledForm from './unified-controlled-form/UnifiedControlledForm';
import Ref from './ref/Ref';


function App() {
  

  return (
    <>
     <Navbar />

     <Routes>
        <Route path="/uncontrolled-form" element={<UncontrolledLogin />} />
        <Route path='/controlled-form' element={<ControlledLogin />} />
        <Route path="/unified-controlled-form" element={<UnifiedControlledForm />} />
        <Route path='/ref' element={<Ref />} />
     </Routes>
    </>
  )
}

export default App
