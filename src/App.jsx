import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import Home from './assets/Home.jsx'
import './App.css'

function App() {
    return(
        <BrowserRouter>
        <nav>
            <NavLink to="/" className={({isActive}) => isActive ? "active-link" : null} >Logo</NavLink>
            <NavLink to="/menu" className={({isActive}) => isActive ? "active-link" : null} >Menu</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "active-link" : null} >Contact</NavLink>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App
