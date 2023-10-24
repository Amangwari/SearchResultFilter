import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/HomePage/Home'
import SignIn from './Pages/Sign-in/SignIn'
import SignUp from './Pages/SignUp/SignUp'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
