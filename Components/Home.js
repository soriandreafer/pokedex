import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css'
import RankContainers from '../Containers/RankContainers';

const Home = () => {    
    console.log('Components/Home.js');
    return(
        <div className='App'>
            <header className='App-header'>
            <img src={process.env.PUBLIC_URL+'/images/Pokemon.png'} width='400' alt='Pokemon'/>
            <form>
                <p>Cadena: <input id="cadena" size="40"/></p>
            </form>
            <Link to='/pokemons'><h1 onClick={RankContainers}>Ver Pokemons</h1></Link>
            </header>
        </div>
    );
}

export default Home;