function FilmeCard({filme}) {
    return (
        <section>
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${filme.poster_path}`} />
            <h3>{filme.title}</h3>
            <p>{filme.release_date}</p>
            <p>{filme.overview}</p>
        </section>
    );
}

export default FilmeCard;