import './FilmeCard.css';
import { toLocale } from '../../utils/toLocale.js';

function FilmeCard({filme, comentar}) {
    
    /** Arrow Function **/
    /** 
     * Porque a arrow function não é invocada automaticamente,
     * mas a função exibiFilme é quando colocada diretamente? 
     * Porque a arrow function é apenas a criação de uma função sem invocação.
     * () => minhaFuncao(1) é a mesma coisa que:
     * function(){minhaFuncao(1)}
     * E é diferente de function(){minhaFuncao(1)}()
     * **/
    return (
        <section className="filmecard" onClick={() => comentar(filme.id)}>
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${filme.poster_path}`} />
            <div id="info">
                <h3>{filme.title}</h3>
                <p>Lançamento: {toLocale(filme.release_date)}</p>
            </div>
        </section>
    );
}

export default FilmeCard;