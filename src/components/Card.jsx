import { Link } from "react-router-dom";
// Importo i CSS Modules delle Card
import style from "./Card.module.css";

function Card({ data }) {
    const imgPath = "http://localhost:3000/img/" + data.image;
    // Destrutturo data così da usare direttamente le variabili destrutturate. Es: title invece di data.title
    const { title, author, abstract, id } = data;
    return (
        <>
            <div className="card  h-100 position-relative" id={style.idcards}>
                <div>
                    <img className="card-img-top" src={imgPath} alt={title} />
                </div>
                <div className="card-body card-description h-100">
                    <h5 className="card-title p-1">{title}</h5>
                    <h5 className="card-title">{author}</h5>
                    <p className="card-text">{abstract}</p>
                    <Link to={`/movies/${id}`} className="btn btn-primary">Dettagli</Link>
                </div>
            </div>
        </>
    );
}

export default Card;