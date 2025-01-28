import { Outlet } from "react-router-dom";
// Importo il GlobalContext per poter accedere alla variabile di stato  isLoading
import { useGlobalContext } from "../contexts/GlobalContext.jsx";
// Importo il componente Loader:
import Loader from "../components/Loader.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function DefautlLayout() {
    const { isLoading } = useGlobalContext();   // Destrutturo per ricavarmi la variabile di stato isLoading
    return (
        <>
            <Header />
            {/* Attivo il Loader se la variabile di stato isLoading è true: */}
            {isLoading && <Loader />}
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}