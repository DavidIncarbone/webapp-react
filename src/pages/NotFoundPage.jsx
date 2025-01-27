import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <Navbar />
            <h1>Pagina non trovata! Torna alla <i><Link to="/">Homepage!</Link></i></h1>
        </>
    );
}

export default NotFoundPage;