import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Zoomer from './Zoomer'
import Box from './Box'

import DATA from './data'



const weekLength = DATA.configs.x,
  hoursLength =  DATA.configs.y

const weekArray = Array(weekLength).fill(0),
		hoursArray = Array(hoursLength).fill(0),
		style={border: 'black 1px solid',  margin: 1}

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

export default () => (
   <DndProvider backend={HTML5Backend}>
     <Container > 
      

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

     </Container>
    </DndProvider>
);
