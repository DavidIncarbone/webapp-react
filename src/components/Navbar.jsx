
import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <NavLink to="/" className={`navbar-brand`}>HomePage</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/movies" className="nav-link active" aria-current="page" style={({ isActive }) => {
                                return isActive ? { color: "red" } : {};
                            }} end>Lista dei posts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" style={({ isActive }) => {
                                return isActive ? { color: "red" } : {};
                            }} end>Chi siamo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacts" className="nav-link" style={({ isActive }) => {
                                return isActive ? { color: "red" } : {};
                            }} end>Contatti</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )

}