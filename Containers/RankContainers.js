import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export var Ranking = [] 

class RankContainer extends Component
{
    updateInput = (event) =>{
        return(this.setState({cadena : event.target.value}))
    }
    
    handleSubmit = () => {
        var cad = this.state.cadena.trim();
        Ranking = cad.split([","]);
        console.log("Rankingggg");
        return(console.log(Ranking))               
    }

    render(){  
        console.log('Containers/RankContainer.js - render');             
        return(
            <Fragment> 
                <div className='App'>
                    <header className='App-header'>
                    <img src={process.env.PUBLIC_URL+'/images/Pokemon.png'} width='400' alt='Pokemon'/>
                    <p>Cadena: <input type="text" onChange={this.updateInput}></input></p>
                    <Link to="/pokemons"><input type="submit" onClick={this.handleSubmit} ></input></Link>
                    </header>
                </div>
            </Fragment>
        )
    }
}

export default RankContainer;