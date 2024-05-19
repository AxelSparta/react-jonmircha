import React, { Component } from 'react'

export class EventosES6 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contador: 0
    }
    // hay que bindear los métodos para que el this dentro de ellos haga referencia a la clase eventos
    this.sumar = this.sumar.bind(this)
    this.restar = this.restar.bind(this)
  }

  sumar () {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  restar () {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render () {
    return (
      <div>
        <h2>Eventos en componentes de clases ES6</h2>
        <h3>{this.state.contador}</h3>
        <button onClick={this.sumar}>Sumar</button>
        <button onClick={this.restar}>Restar</button>
      </div>
    )
  }
}

export class EventosES7 extends Component {
  state = {
    contador: 0
  }

  // Al usar arrow function ya tienen el contexto de la clase con lo cual no es necesario "bindear" estos métodos
  sumar = e => {
    this.setState({ contador: this.state.contador + 1 })
  }
  restar = e => {
    this.setState({ contador: this.state.contador - 1 })
  }
  render () {
    return (
      <div>
        <h2>Eventos en componentes de clases ES7</h2>
        <h3>{this.state.contador}</h3>
        <button onClick={this.sumar}>Sumar</button>
        <button onClick={this.restar}>Restar</button>
      </div>
    )
  }
}

const Button = ({ myOnClick }) => (
  <button onClick={e => myOnClick(e, 'message')}>Evento personalizado</button>
)

export class MasSobreEventos extends Component {
  handleClick = (e, msg) => {
    console.log(e, msg)
    console.log(e.nativeEvent)
  }
  render () {
    return (
      <div>
        <h2>Mas sobre eventos</h2>
        <button onClick={e => this.handleClick(e, 'Este es un mensaje')}>
          Enviando mensajes como parámetros
        </button>
        <Button myOnClick={this.handleClick} />
      </div>
    )
  }
}
