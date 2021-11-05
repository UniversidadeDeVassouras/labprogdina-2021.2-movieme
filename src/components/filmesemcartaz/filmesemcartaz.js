import './FilmesEmCartaz.css'
import { Component } from 'react';
import FilmeCard from '../filmecard/filmecard';

/**
 * Stateless - Sem estado, apenas props. (HTTP)
 * Statefull - Guardam estado e tem props.
 */
export default class FilmesEmCartaz extends Component {

    constructor(props) {
        super(props);
        this.state = {filmeLista: []};
    }

    onFalhaCarregamentoFilmesEmCartaz(erro) {
        console.log(erro);
    }

    /*componentDidUpdate() {
        console.log("Atualizado com sucesso!");
    }*/

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=b4537e21984eb259d2c2b093b7980570")
        .then(response => response.json(), this.onFalhaCarregamentoFilmesEmCartaz)
        .then(json => this.setState({ filmeLista: json.results }), this.onFalhaCarregamentoFilmesEmCartaz);
    }

    render() {
        return (
            <section id="filmesemcartaz">
                {
                    this.state.filmeLista.map(function (filme, index) {
                        return <FilmeCard key={index} filme={filme} />
                    })
                }
            </section>
        )
    }

    /**
     * minhaFuncao = (resolve, reject) => {
            //..Executo algum processamento
            try {
                resultado = 1 + 1;
                resolve(resultado);
            } catch(exception) {
                reject(exception); //MainThread
            }
        }
        minhaPromise = new Promise(minhaFuncao);
        minhaPromise.then(function(retorno){}, function(erro){});
     */

}