import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar'
import Front from './pages/Front'
import LoginSignup from './pages/LoginSignup'
import Doctors from './pages/Doctors';
import Appointment from './pages/Appointment';

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Front />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/appointment' element={<Appointment />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
