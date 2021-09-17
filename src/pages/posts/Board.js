import React from 'react'
import Square from './Square'
import Knight from './Knight'

function renderSquare(i, [knightX, knightY]) {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightX && y === knightY
  // const black = (x + y) % 2 === 1
  const black = x% 2 === 1
  const piece = isKnightHere ? <Knight /> : null

  return (
    <div key={i} style={{ width: `${100/semaines}px`, height: `${100/semaines}px` }}>
      <Square black={black}>{piece}</Square>
    </div>
  )
}

const semaines = 36
const seances_par_semaine = 40 

export default function Board() {
  const knightPosition = [2, 3]
  const squares = []
  for (let i = 0; i < semaines*seances_par_semaine ; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap : 'wrap'
      }}
    >
      {squares}
    </div>
  )
}