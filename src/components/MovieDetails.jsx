// Hook usato per accedere a rotte dinamiche (consente di estrarre i parametri dalla URL, in questo caso mi serve il parametro dell'id):

import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import axios from "axios";
import Star from "./Star";
import Loader from "./Loader";
// Importo il CSS Modules di moviesDetails
import style from "./MovieDetails.module.css"
import ReviewForm from "./ReviewForm";

export default function MovieDetails({ datamovies }) {
    const { id } = useParams();     //Destrutturo useParames e ricavo l'id
    console.log("datamovies: ", datamovies);

    const imgPath = "http://localhost:3000/img/";

    return (
        <>
            {datamovies ?
                <>
                    <div className="col-12 col-md-6 col-lg-4" key={id}>
                        <div className="card" id={style.idcards}>
                            <img className="card-img-top" src={imgPath + datamovies.image} alt={datamovies.title} />
                            <div className="card-body">
                                <h5 className="card-title">{datamovies.title}</h5>
                                <h5 className="card-title">{datamovies.author}</h5>
                                <p className="card-text">{datamovies.abstract}</p>
                                <Link to='/movies/' className="btn btn-primary">Torna alla lista dei film</Link>
                            </div>
                        </div>
                    </div>
                    <section className="py-4">
                        <div className="py-4 d-flex justify-content-between "><h3 >Recensioni:</h3><h3 >Media voto: {<Star num={datamovies.vote_average} />}</h3></div>


                        {datamovies.reviews.map((review) => (
                            <div key={review.id}>
                                <div className={"card d-flex flex-column mb-3"}>
                                    <div className="card-body">
                                        <p className="card-text">{review.text}</p>
                                        <h5 className="card-title">Vote: {<Star num={review.vote} />}</h5>
                                        <p className={`card-text ${style["text-name"]}`}>By {review.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                    <section>
                        <ReviewForm />
                    </section>
                </>
                : <Loader />
            }
        </>
    );
}