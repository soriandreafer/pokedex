import React, { Fragment } from 'react';
import '../App.css';

function Peleas( {pokedata}) {
  console.log('Components/Peleas.js');
  var i,j,IndexOpon, diferIni, result, CantPeleas, cadena;  
  var batallas = []; 
  var obj = {retador:"",retado:""};
 
  //Ordenamiento
  for (i = 0; i<pokedata.length; i++) 
  {
    for (j = 0; j<pokedata.length-1; j++) 
    {
      if (pokedata[j].id > pokedata[j+1].id) 
      {                
        let tmp = pokedata[j];
        pokedata[j] = pokedata[j + 1];
        pokedata[j + 1] = tmp;         
      } 
    }           
  }  

  CantPeleas = 0;
  IndexOpon=-1;

  console.log("pokedata for");
  console.log(pokedata);
  for (i = 0; i<pokedata.length; i++) 
  {
    pokedata[i].pos_inicial = i+1;     
    pokedata[i].difer = pokedata[i].pos_inicial-pokedata[i].pos_final;
    if(pokedata[i].difer > 0)   
      pokedata[i].oponente=IndexOpon;       
    else
      pokedata[i].oponente=-1;

    if(i == 0)   
    {
      if(pokedata[i].difer < 0)
        IndexOpon=0;             
    }
    else    
    {
      if(i<pokedata.length && pokedata[i].difer < 0 && pokedata[i-1].difer >= 0)
        IndexOpon=i;    
                   
      if(pokedata[i].difer === 0) 
      {
        if(pokedata[i-1].difer===-2)
        {       
          obj.retador=pokedata[i].id+" - "+pokedata[i].name;
          obj.retado=pokedata[i-1].id+" - "+pokedata[i-1].name;
          batallas[CantPeleas]=JSON.stringify(obj);
          batallas[CantPeleas]=JSON.parse(batallas[CantPeleas]);
          CantPeleas++;  
          IndexOpon=i-1;    
        }
        else      
          IndexOpon=-1;  
      }   
    }         
  }
  console.log("pokedata for end");
  console.log(pokedata);
  //Ascensos
  result = pokedata.filter(Rank => Rank.difer > 2)

  if (result.length > 0){
    cadena = 'Resultado no válido';
  }
  else{
    result = pokedata.filter(Rank => Rank.difer > 0)    
    if (result.length > 0) 
    {
      console.log("result");
      console.log(result);
      for (i = 0; i<result.length; i++) 
      {  
        j = parseInt(result[i].pos_inicial);
        obj.retador=pokedata[j-1].id+" - "+pokedata[j-1].name;   

        if(result[i].difer == 2 )
        {          
          obj.retado=pokedata[j-2].id+" - "+pokedata[j-2].name;
          batallas[CantPeleas+1]=JSON.stringify(obj);
          batallas[CantPeleas+1]=JSON.parse(batallas[CantPeleas+1]);
        }
        IndexOpon=pokedata[j-1].oponente;
        obj.retado=pokedata[IndexOpon].id+" - "+pokedata[IndexOpon].name; 
        batallas[CantPeleas]=JSON.stringify(obj);
        batallas[CantPeleas]=JSON.parse(batallas[CantPeleas]);                 
        

        CantPeleas = CantPeleas + parseInt(result[i].difer);
      }
    }
    cadena = 'Se disputaron mínimo '+CantPeleas+' peleas.';
  }
  console.log("Batallas ->");
  console.log(batallas);
  return(
    <Fragment>                  
      <h2>{cadena}</h2>  
      <table width="60%">
        <tr><td>
          <table name="tbl_Fights" className="blueTable" width="20%">
                <tbody>
                <tr>
                    <th colSpan="2"><center>Ranking Inicial</center></th>               
                </tr>
                <tr>
                    <th><center>Índice</center></th>
                    <th><center>Nombre</center></th>               
                </tr>
                {pokedata
                    .map((Data, index) => {
                        return (                         
                            <Fragment>                                                    
                                <tr id="tr_inicial">
                                    <td id="indice" rowKey={index}><center>{Data.id}</center></td>
                                    <td id="name_i" rowKey={index}>{Data.name}</td>
                                </tr>                                                               
                            </Fragment>                          
                        )                    
                    })                
                }            
                </tbody>
          </table>  
          </td>
          <td>
          <table name="tbl_Fights" className="blueTable" width="80%">
                <tbody>
                <tr>
                    <th colSpan="2"><center>Peleas disputadas</center></th>               
                </tr>
                <tr>
                    <th><center>Retador</center></th>
                    <th><center>Retado</center></th>               
                </tr>
                {batallas
                    .map((Fight, index) => {
                        return (                         
                            <Fragment>                                                    
                                <tr id="tr_fight">
                                    <td id="retador" rowKey={index}>{Fight.retador}</td>
                                    <td id="retado" rowKey={index}>{Fight.retado}</td>
                                </tr>                                                               
                            </Fragment>                          
                        )                    
                    })                
                }            
                </tbody>
            </table>
        </td></tr>
        </table>
    </Fragment>
  );
}

export default Peleas;