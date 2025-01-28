import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Star from "./Star.jsx";
// Importo il GlobalContext per poter accedere alla variabile di stato  isLoading
import { useGlobalContext } from "../contexts/GlobalContext.jsx";
// Importo il componente Loader:
import Loader from "./Loader.jsx";
import style from "./MovieDetails.module.css";
import ReviewForm from "./ReviewForm.jsx";
export default function MovieDetails({ datamovies }) {
    const { id } = useParams();     //Destrutturo useParames e ricavo l'id
    const { isLoading } = useGlobalContext();   // Destrutturo per ricavarmi la variabile di stato isLoading
    const imgPath = "http://localhost:3000/img/";

    console.log("datamovies: ", datamovies);
    return (
        <>
            {datamovies ?
                <>
                    <div className="col-12 col-md-6 col-lg-4" key={id}>
                        <div className="d-flex mb-5">
                            <img className="card-img-top me-5 w-50" src={imgPath + datamovies.image} alt={datamovies.title} />
                            <div className="d-flex flex-column justify-content-between">
                                <div className="card-detail-review">
                                    <h5 className="fs-1">{datamovies.title}</h5>
                                    <h5 className="text-secondary">By {datamovies.author}</h5>
                                    <p className="text-secondary">{datamovies.abstract}</p>
                                </div>
                                {/* <Link to="/movies/" className="btn btn-primary w-25 small-text">
                                    Torna alla lista dei film
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    <section>
                        <div className="d-flex justify-content-between">
                            <h3>Recensioni:</h3>
                            <h3>
                                Media voto: <Star num={datamovies.vote_average} />
                            </h3>
                        </div>
                        {datamovies.reviews.map((review) => (
                            <div key={review.id}>
                                <div className={"card d-flex flex-column mb-3"}>
                                    <div className="card-body">
                                        <p className="card-text">{review.text}</p>
                                        <h5 className="card-title">
                                            Vote: <Star num={review.vote} />
                                        </h5>
                                        <p className={`card-text ${style["text-name"]}`}>By {review.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                    <section>
                        <ReviewForm movie_id={id} />
                    </section>
                </>
                : isLoading && <Loader />
            }
        </>
    );
}