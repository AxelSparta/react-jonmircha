import React from 'react'
import './Estilos.css'
export default function Estilos () {
  let myStyles = {
    borderRadius: '.5rem',
    margin: '0 auto',
    maxWidth: '50%',
    textAlign: 'center'
  }
  return (
    <div className='estilos bg-react'>
      <h1>Estilos CSS en React</h1>
      <h1 style={{ borderRadius: '0.25rem', margin: '1.5rem' }}>
        Estilos en línea (atributo style)
      </h1>
      <h1 style={myStyles}>Estilos en línea</h1>
    </div>
  )
}
