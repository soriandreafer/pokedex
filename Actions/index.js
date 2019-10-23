import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';

export function GetPokemons(){
  console.log('Actions/index.js')
  return(dispatch, getState) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=964&offset=0')
    .then ((response) => {
      dispatch( {type: GET_POKEMONS, resApi: response.data.results })
    })
  }
}