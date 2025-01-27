import FooterStyle from "../style/Footer.module.css"

export default function Footer() {
    return (

        <footer className={`bg-dark text-white text-center p-3 ${FooterStyle.footerClass}`}>
            <p>Footer here, right here</p>
        </footer>
    )
}