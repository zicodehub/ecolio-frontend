function SimpleBox({ children, height }) {
  return (
    <div style={ {...style, height: height ? height : '40px' } } >
      { children }
    </div>
  )

}


let style = {
  border: 'black 1px solid',
  margin: 1,
  width: '80px',
  height: '40px',
  display: 'flex',
  overflow: 'hidden',
  backgroundColor: 'white',
  fontSize: 14,
  fontWeight: 'bold',

}


export default SimpleBox

