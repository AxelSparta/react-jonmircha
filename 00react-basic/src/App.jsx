// import logo from "./logo.svg";
import './App.css'
import React from 'react'
import Formularios from './components/Formularios'
import Referencias from './components/Referencias'
import AjaxHooks from './components/AjaxHooks'
import CustomHooks from './components/CustomHooks'
import ContadorHooks from './components/contadorHooks'
import ScrollHooks from './components/ScrollHooks'
import RelojHooks from './components/relojHooks'
import Componente from './components/Componente'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos'
import { ComunicacionComponentes } from './components/ComunicacionComponentes'
import CicloDeVida from './components/CicloDeVida'
import PeticionesAjax from './components/PeticionesAjax'
import Estilos from './components/Estilos'

function App () {
  let estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno']
  let auth = true
  let nombre = 'Axel'

  return (
    // fragment: <> </>

    <main className='container'>
      <div>
        {/* htmlFor es un atributo de jsx que hace referencia al for, no se utiliza el for directamente por que está reservada para el bucle */}
        <label htmlFor='name'>Nombre</label>
        <br />
        <input id='name' name='name' placeholder='Introduce tu nombre...' />
        <ul>
          {/* Recorriendo un array con jsx */}
          {estaciones.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <p>
          {/* Mostrando contenido de manera condicional */}
          {/* if else */}
          {auth ? 'El usuario está logueado' : 'El usuario no está logueado'}
          {/* if */}
          {auth && <p>Usuario logeado</p>}
        </p>
        <p>{nombre}</p>
        <p>{2 + 1}</p>
        {/* <img width={150} src={logo} alt="logo"></img> */}
      </div>
      <Componente message='Hola soy un componente' />
      {/* Una dependencia para usar propiedades es prop-types para definir el tipo de propiedades que recibimos en un componente y si es requerida o no */}
      <Propiedades title='Buenas' />
      <Estado title='Hola buenas' />
      <RenderizadoCondicional />
      <RenderizadoElementos />
      <EventosES6 />
      <EventosES7 />
      <MasSobreEventos />
      <ComunicacionComponentes />
      <CicloDeVida />
      <PeticionesAjax />
      <ContadorHooks />
      <ScrollHooks />
      <RelojHooks />
      <AjaxHooks />
      <CustomHooks />
      <Referencias />
      <Formularios />
      <Estilos />
    </main>
  )
}

export default App
