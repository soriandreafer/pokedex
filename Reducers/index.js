import { combineReducers } from 'redux'
import { ShowPokemons } from './Pokemons'

const rootReducer = combineReducers({
	pokemon: ShowPokemons
});
console.log('Reducer/index.js');

export default rootReducer