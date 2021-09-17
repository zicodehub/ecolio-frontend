import React from 'react'
import { useDrop , useDrag } from 'react-dnd'
import DATA from './data'

let SOURCE = null

const setSource = src => {SOURCE = src}

const moveCase = (target) => {
  if (target) {
    const tempo = target.matiere
    target.matiere = SOURCE.matiere
    SOURCE.matiere = tempo
    // console.log(`FROM (${SOURCE.x}, ${SOURCE.y}) to (${target.x}, ${target.y}) => ${DATA.niveaux[0].classes[0]} `)
  }
}

const estLibre = ([x,y], schedule) => {
  for (var i = 0; i < schedule.length; i++) {
    if( schedule[i].x !== x || schedule[i].y !== y ) return false 
  }
  return true
}

const canMove = (target, enseignants) => {
  let ensTarget = enseignants.find( ens=> ens.nomEnseignant === target.enseignant )
  // console.log(ensTarget)
  // let ensSource = SOURCE.enseignant
  if (estLibre( [target.x, target.y], ensTarget.schedule )) return true
  return false
  
}

// COMPONENT CASE
function Case({value}) {
  const [ {isDragging}, drag ] = useDrag(() => ({
    type: 'box',
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    }),
  }))

  // isDragging && setSource(value)
  if (isDragging) {
    setSource(value)
    // canMove(value)
    console.log('Is dragging')

  }
  return (
    <span
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 14,
        fontWeight: 'bold',
        cursor: 'move',
    
      }}
    >
      {[value ? value.matiere: null]}
    </span>
  )
}

// COMPONENT BOX
function Box({ x, y, value, enseignants}) {

  const [ { isOver, canDrop  }, drop ] = useDrop(() => ({
      accept: 'box',
      drop: () => moveCase(value),
      canDrop: () => canMove(value, enseignants),
      collect: monitor => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop()
      }),
    }), [x, y])


    {isOver && !canDrop && setBgCol("red")}
    {!isOver && canDrop && setBgCol("yellow")}
    {isOver && canDrop && setBgCol("green")}
    {!isOver && !canDrop && setBgCol("white")}
  return (
    <div
      ref={drop}
      style={ style }
    >
      <Case value={value} />
    </div>
  )

}

const setBgCol = color => {style = { ...style, backgroundColor : color}}

let style = {
  border: 'black 1px solid',
  margin: 1,
  width: '80px',
  height: '40px',
  display: 'flex',
  overflow: 'hidden',
  backgroundColor: 'white'
}


export default Box

