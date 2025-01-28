import { useGlobalContext } from "../contexts/GlobalContext.jsx";
import Card from "../components/Card.jsx";
import Loader from "../components/Loader.jsx";
export default function movies() {
    const { movies, isLoading } = useGlobalContext();
    return (
        <section className="container py-4">
            {isLoading && <Loader />}
            <div className="row g-3">
                {movies.map((movie) => (
                    <div className="col-12 col-md-6 col-lg-4" key={movie.id}>
                        <Card data={movie} />
                    </div>
                ))}
            </div>
        </section>
    );
}