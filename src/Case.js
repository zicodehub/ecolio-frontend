// import React from 'react'
// import { useDrag  } from 'react-dnd'

// const sendDragger = (source)=> console.log(`Dragger ${source.matiere}  `)


// function Case({value}) {

//   const [ {isDragging}, drag ] = useDrag(() => ({
//     type: 'box',
//     collect: monitor => ({
//       isDragging: !!monitor.isDragging()
//     }),
//   }))

//   isDragging && sendDragger(value)

  

//   return (
//     <span
//       ref={drag}
//       style={{
//         opacity: isDragging ? 0.5 : 1,
//         fontSize: 14,
//         fontWeight: 'bold',
//         cursor: 'move',
    
//       }}
//     >
//       {[value ? value.matiere: null]}
//     </span>
//   )
// }

// export default Case

