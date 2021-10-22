import logo from './logo.svg';
import './App.css';
import FilmesEmCartaz from './components/filmesemcartaz/filmesemcartaz';
import FilmesProximos from './components/filmesproximos/filmesproximos';

function App() {
  return (
    <div className="App">
      <article>
        <h2>Filmes em Cartaz</h2>
        <FilmesEmCartaz/>
        <h2>Próximos Lançamentos</h2>
        <FilmesProximos />
      </article>
    </div>
  );
}

export default App;
