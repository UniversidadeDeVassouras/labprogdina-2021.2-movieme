import './FilmeCard.css';
import { toLocale } from '../../utils/toLocale.js';

function FilmeCard({filme}) {

    return (
        <section className="filmecard">
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${filme.poster_path}`} />
            <div id="info">
                <h3>{filme.title}</h3>
                <p>Lançamento: {toLocale(filme.release_date)}</p>
            </div>
        </section>
    );
}

export default FilmeCard;