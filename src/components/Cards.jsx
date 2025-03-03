// Card per ogni film
// Con informazioni sul film

function Cards({ film }) {

    return (

        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                </div>
                <div className="flip-card-back">
                    <h1>{film.original_title}</h1>
                    <p>{film.title}</p>
                    <p>{film.vote_average}</p>
                    <p>{film.overview}</p>
                    <span>{film.original_language}</span>
                </div>
            </div>
        </div>

    )

}

export default Cards
