function Card({ data }) {
    const imgPath = "http://localhost:3000/img/movies" + data.image;
    return (
        <>
            <div className="card">
                <img className="card-img-top" src={imgPath} alt={data.title} />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <h5 className="card-title">{data.author}</h5>
                    <p className="card-text">{data.abstract}</p>
                    <a href="#" className="btn btn-primary">più info</a>
                </div>
            </div>
        </>
    );
}

export default Card;