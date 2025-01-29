import FooterStyle from "../style/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faTwitter, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (

        <footer className=" d-flex justify-content-between  bg-dark text-white px-5 ">

            <div className={`d-flex gap-2 align-items-center h-100 ps-1 `} >
                <div className={`${FooterStyle.footerIMG}`}>
                    <img style={{ width: "100%", height: "100%" }} src="https://www.bookrepublic.it/media/ex_satchmo/editori/download.jpeg.200x200_q85.jpg" alt="Sellerio icon" />
                </div>
                <div className="h-100 d-flex flex-column">
                    <div>Sellerio Editore</div>
                    <div className={`${FooterStyle.footerInfo} `}>Via Enzo ed Elvira Sellerio 50, 90141 Palermo </div>

                </div>

            </div>



            <ul className="list-unstyled d-flex align-items-center h-100">
                <li><a href="#"><FontAwesomeIcon icon={faFacebook} style={{ height: "20px", width: "20px", color: "white", paddingRight: "15px" }} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faGithub} style={{ height: "20px", width: "20px", color: "white", paddingRight: "15px" }} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faTwitter} style={{ height: "20px", width: "20px", color: "white", paddingRight: "15px" }} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faYoutube} style={{ height: "20px", width: "20px", color: "white", paddingRight: "15px" }} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faTiktok} style={{ height: "20px", width: "20px", color: "white", paddingRight: "15px" }} /></a></li>

            </ul>

        </footer>
    )
}