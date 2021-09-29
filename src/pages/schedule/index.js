import * as React from "react";
import {useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Zoomer from './Zoomer'
import Box from './Box'
import SimpleBox from './SimpleBox'

import './data'


const axios = require("axios")

const localhost = {
    url: "https://ecolioo.herokuapp.com/api",
    code: "pbkdf2_sha256$260000$6ej1DnO64vQ8SqkudggJQy$aQadVa5Nql/5DNp530ffcyVRxRQL3EB/xm16g3z+8pc="
}


const INSTANCE = localhost

const axiosInstance = axios.create({
    baseURL: INSTANCE.url,
    headers: {
        "x-code": INSTANCE.code
    }
}) 


let DATA = JSON.parse(localStorage.getItem('SCHEDULE DATA'))



const existIn = (el, liste) => {
  for (var i = 0; i < liste.length; i++) {
    if (liste[i] === el ) {
      return true
    }
  }
return false
}

const renderBox = (listeClasse, listeEnseignants, [x, y]) => {
  let element = listeClasse.schedule.find( dict => dict.x === x && dict.y === y )
  let enseignantsDeCetteClasse = []
  if (element){
    listeEnseignants.map(
      ens  => {
        if (existIn(listeClasse.nomClasse, ens.classes)){
          enseignantsDeCetteClasse.push(ens)
        }
      }
    )

  }
  // console.log(`En état : ${element} `)
  // console.log(`Ses enseignants : ${enseignantsDeCetteClasse[0].nomEnseignant} `)
  // enseignantsDeCetteClasse.map(e => console.log(e) )
  return (
      <Box x={x}  y= {y} value={element ? element : null } enseignants={enseignantsDeCetteClasse} /> 
  )
}

let daysStyle = {
  border: 'black 1px solid',
  margin: 1,
  width: '200px',
  height: '40px',
  fontWeight: 'bold',

}

export default () => {
  const [g, refresh] = useState(0)


  const weekLength = DATA.configs.x,
    hoursLength =  DATA.configs.y

  const weekArray = Array(weekLength).fill(0),
      hoursArray = Array(hoursLength).fill(0),
      style={border: 'black 1px solid',  margin: 1}
  

  useEffect( () => {
    if(!DATA || 1) {
      axiosInstance({
        url: '/schedule?in_json=1',
        method: "get"
      })
        .then(({data}) => {
          console.log('OKOKOK')
          localStorage.setItem('SCHEDULE DATA', JSON.stringify(data) ) 
          console.log('OKOKOK')
          DATA = JSON.parse(localStorage.getItem('SCHEDULE DATA'))
          refresh(1)
        })
        .catch(err => alert("Erreur pendant la récupération du schedule") )
    }
      
  } , [])

  return (
   <DndProvider backend={HTML5Backend}>
     <div style={{  width: '100%', height : '100%' }} > 

       {/*<Row > */}
{/*         <Row > 
             <Col md="1" style = {{marginRight: 10}} >.</Col >           
             <Col md="1" >
                 <div style = {{display:  'flex'}} > 
                   <div  style = {{...daysStyle}} >SEMAINE 1</div >           

                   <div  style = {{...daysStyle}} >SEMAINE 2</div >           
                 </div > 
             </Col >           
         </Row > 
*/}
         <div style={{display: 'flex', flexDirection : 'row', overflow: 'scroll'}} > 
             <div md="1" style = {{marginRight: 40}} >
                       <SimpleBox height = '335px' > LUNDI </SimpleBox > 
                       <SimpleBox height = '335px' > MARDI </SimpleBox > 
                       <SimpleBox height = '335px' > MERCREDI </SimpleBox > 
                       <SimpleBox height = '335px' > JEUDI </SimpleBox > 
                       <SimpleBox height = '335px' > VENDREDI </SimpleBox > 
             </div > 
             <div md="10" >
                {
                  hoursArray.map(
                    (h, hIndex) => (
                        <Row style={{display: 'flex', flexWrap: 'nowrap'}}>
                        {
                            weekArray.map(
                              (w, wIndex) =>  renderBox( 
                                DATA.niveaux[0].classes[0] , 
                                DATA.enseignants , 
                                [wIndex, hIndex])
                            )
                        }
                        </Row>
                    )
                  )

                }

              </div > 
         </div > 
       {/*</Row > */}
        


     </div>
    </DndProvider>

)
};
