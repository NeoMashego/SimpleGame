import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import './App.css'

function App() {
    <BrowserRouter>
    <nav>
        <NavLink to="/" className={({isActive}) => isActive ? "active-link" : null} >Logo</NavLink>
        <NavLink to="/menu" className={({isActive}) => isActive ? "active-link" : null} >Menu</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "active-link" : null} >Contact</NavLink>
    </nav>
    <Routes>
        <Route />
    </Routes>
    </BrowserRouter>
}

export default App
