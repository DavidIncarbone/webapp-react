import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import HeaderStyle from "../style/Header.module.css"

export default function Header() {
    return (

        <header className={`bg-secondary-subtle w-100${HeaderStyle.fixed}`}>
            <Navbar />
        </header>

    )
}