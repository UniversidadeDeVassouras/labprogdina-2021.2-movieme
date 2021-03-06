import React, { useState } from 'react';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { Component } from 'react';
import FilmeCard from '../filmecard/filmecard';

import './FilmesEmCartaz.css';

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

    onFalhaAoEnviarComentario(erro) {
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

    enviarComentario(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            header: {'Content-Type': 'application/json'},
            body: {"comentario": ""} //this.state.comentario
        }

        fetch("https://httpbin.org/anything", requestOptions)
            .then(response => response.json(), this.onFalhaAoEnviarComentario)
            .then(json => this.setState({ comentarioLista: json.json }), this.onFalhaAoEnviarComentario);
        /*
            formData = new FormData(formularioHtml);
            object = {}
            formData.forEach(function(value, key){
                object[key] = value;
            });
            var json = JSON.stringify(object); 
            //Colocar o json no body
        */
    }
    
    comentar(filmeId) {
        let MySwal = withReactContent(Swal);
        //MySwal.bind(this)
        MySwal.fire({
            html: (
                <div>
                    <h3>Enviar Coment??rio para o Filme {filmeId}</h3>
                    <form onSubmit={this.enviarComentario}>                    
                        <input type="text" /*onChange={this.setState({comentario: ""})}*/ />
                        <input type="submit"/>
                    </form>
                </div>
            ),
            background: '#6c60c3',
            backdrop: 'rgba(110, 97, 198, .1)',
            showConfirmButton: false,
            showCloseButton: true,  
            /*
            preConfirm: (login) => {
                return fetch(`//api.github.com/users/${login}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(response.statusText)
                        }
                        return response.json()
                })
                .catch(error => {
                    Swal.showValidationMessage(`Request failed: ${error}`)
            })
            */
        });
    }

    render() {
        return (
            <section id="filmesemcartaz">
                {
                    this.state.filmeLista.map(
                        function (filme, index) {
                            return <FilmeCard key={index} filme={filme} comentar={this.comentar} />
                        }, 
                        this
                    )
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