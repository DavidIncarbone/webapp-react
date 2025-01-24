
import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li>
                        <NavLink to="/" className="nav-link" ><h5>Bool Movies</h5></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/movies" className="nav-link active" aria-current="page" style={({ isActive }) => {
                            return isActive ? { color: "red" } : {}
                        }} end>Lista dei films</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link" style={({ isActive }) => {
                            return isActive ? { color: "red" } : {}
                        }} end>Chi siamo</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contacts" className="nav-link" style={({ isActive }) => {
                            return isActive ? { color: "red" } : {}
                        }} end>Contatti</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )

}