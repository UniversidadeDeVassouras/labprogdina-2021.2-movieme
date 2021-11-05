import './FilmesProximos.css'
import { Component } from 'react';
import FilmeCard from '../filmecard/filmecard';

export default class FilmesProximos extends Component {

    constructor(props) {
        super(props);
        this.state = {filmeLista: []}
    }

    onCarregamentoFilmesProximosFalhou(erro) {
        console.log(erro);
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=b4537e21984eb259d2c2b093b7980570")
        .then(response => response.json(), this.onCarregamentoFilmesProximosFalhou)
        .then(response => this.setState({filmeLista : response.results}), this.onCarregamentoFilmesProximosFalhou);
    }   

    render() {
        return (
            <section id="filmesproximos">
                {
                    this.state.filmeLista.map(function (filme, index) {
                        return <FilmeCard key={index} filme={filme} />
                    })
                }
            </section>
        )
    }


}