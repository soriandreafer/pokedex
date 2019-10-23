import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetPokemons }  from '../Actions';
import List from '../Components/List';

class PokeContainer extends Component
{
    componentDidMount(){
        console.log('Containers/PokeContainers.js - componentDidMount');
        this.props.GetPokemons();
    } 

    render(){  
        console.log('Containers/PokeContainers.js - render');             
        return(
            <div>
                <List pokedata = {this.props.pokemons}  /> 
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('Containers/PokeContainers.js - mapStateToProps');    
    return{
      pokemons: state.pokemon.list
    }
}

export default connect(mapStateToProps, { GetPokemons })(PokeContainer);
//<List pokedata = {this.props.pokemon}  /> 