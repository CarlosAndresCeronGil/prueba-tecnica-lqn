import './App.css';
import Home from './pages/Home';
import { Route, Link } from 'wouter';
import Numbers from './pages/Numbers';
import Pokemons from './pages/Pokemons';
import StarWars from './pages/StarWars';
import DetailPerson from './pages/DetailPerson';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/'>
          <figure className='App-logo'>
            <img src='/logo-lqn.png' alt='LQN Logo'></img>
          </figure>
        </Link>
        <div className='App-links'>
          <Link to='/numbers'>Ejercicio de lógica 1</Link>
          <Link to='/pokemons'>Ejercicio de lógica 2</Link>
          <Link to='/starwars'>Website Star Wars</Link>
        </div>
        <Route 
          component={Numbers}
          path="/numbers"
        />
        <Route 
          component={Pokemons}
          path="/pokemons"
        />
        <Route 
          component={StarWars}
          path="/starwars"
        />
        <Route 
          component={DetailPerson}
          path="/starwars/character/:id"
        />
      </header>
    </div>
  );
}

export default App;
