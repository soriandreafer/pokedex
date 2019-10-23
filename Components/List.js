import React, { Fragment } from 'react';
import '../App.css';
import { Ranking } from '../Containers/RankContainers';
import Peleas from '../Components/Peleas';

function  List( {pokedata} ) {
    console.log('Components/List.js');     
    var contador = 0;
    var RankingEnd = []; 
    var obj = {id:0,name:"",pos_inicial:0,pos_final:0,difer:0,oponente:0};

    for(var i=0;i<Ranking.length;i++)
    {
        obj.name=Ranking[i];
        obj.pos_final=i+1;        
        RankingEnd[i]=JSON.stringify(obj);
        RankingEnd[i]=JSON.parse(RankingEnd[i]);
    }
    
	return(
        <Fragment>
		<h1>Ranking Pokemons!</h1>        
        <table name="tbl_Ranking" className="blueTable">
            <tbody>
            <tr>
                <th><center>Posición</center></th> 
                <th><center>Índice</center></th>
                <th><center>Nombre</center></th>                               
            </tr>
            {RankingEnd
                .map((Rank, index) => {
                    {contador=contador+1}
                    return (                         
                        <Fragment>                                                    
                            <tr id="tr_pokemon">
                                <td id="pos_final" rowKey={index}><center>{RankingEnd[index].pos_final=contador}</center></td>
                                <td id="id_pokemon" rowKey={index}><center>{RankingEnd[index].id=pokedata
                                    .findIndex(pokemon => pokemon.name === Rank.name)+1}</center></td>
                                <td id="name" rowKey={index}>{RankingEnd[index].name=Rank.name}</td>                                
                            </tr>                                                               
                        </Fragment>                          
                    )                    
                })                
            }            
            </tbody>
        </table> 
        {console.log(RankingEnd)}      
        <Peleas pokedata={RankingEnd}/>
        </Fragment>        
    );    
}

export default List;