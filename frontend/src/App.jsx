import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar'
import Front from './pages/Front'
import LoginSignup from './pages/LoginSignup'

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Front />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
