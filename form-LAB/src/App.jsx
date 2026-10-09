import { Route, Routes } from 'react-router';
import UncontrolledLogin from "./uncontrolled-login/UncontrolledLogin";
import ControlledLogin from "./controlled-login/ControlledLogin";
import Navbar from "./navbar/Navbar";
import UnifiedControlledForm from './unified-controlled-form/UnifiedControlledForm';
import Ref from './ref/Ref';
import Timer from './timer/Timer';
import FormActions from './form-actions/FormActions';


function App() {
  

  return (
    <>
     <Navbar />

     <Routes>
        <Route path="/uncontrolled-form" element={<UncontrolledLogin />} />
        <Route path='/controlled-form' element={<ControlledLogin />} />
        <Route path="/unified-controlled-form" element={<UnifiedControlledForm />} />
        <Route path="/form-actions" element={<FormActions />} />
        <Route path='/ref' element={<Ref />} />
        <Route path="/timer" element={<Timer />} />
     </Routes>
    </>
  )
}

export default App
