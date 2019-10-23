import { GET_POKEMONS }from '../Actions'

const initialState = {
	list:[]
}

export function ShowPokemons(state=initialState,action){
	console.log('Reducer/Pokemons.js')
	switch(action.type){
		case GET_POKEMONS:
			console.log('Reducer/Pokemons.js   case GET_POKEMONS:')
			return Object.assign({}, state,{list:action.resApi})
		default:
			console.log('Reducer/Pokemons.js   default:')
			return state
	}
}