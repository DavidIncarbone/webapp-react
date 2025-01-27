import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import MainStyle from "../style/Main.module.css"

export default function DefautlLayout() {
    return (
        <>
            <Header />
            <main className={`mt-3 ${MainStyle.mainClass}`}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}