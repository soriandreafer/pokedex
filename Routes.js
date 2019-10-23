import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Home from './Components/Home';
import PokeContainer from './Containers/PokeContainer';
import Peleas from './Components/Peleas';
import RankContainers from './Containers/RankContainers';

const Routes = () => {    
    console.log('src/Routes.js')
    return(        
        <Switch>
            <Route exact path='/' component= { RankContainers }/>
            <Route exact path='/pokemons' component= { PokeContainer }/>
            <Route exact path='/peleas' component= { Peleas }/>
        </Switch>
    );
}

export default Routes;