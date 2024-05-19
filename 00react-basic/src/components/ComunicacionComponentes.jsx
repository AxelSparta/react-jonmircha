import React, { Component } from "react";

const Hijo = ({ msg, contadorHandler }) => (
  <div>
    <p>{msg}</p>
    {/* Modificando el estado del componente padre a través de un método del componente padre pasado por las props al componente hijo */}
    <button onClick={contadorHandler.incrementarContador}>
      Incrementar contador
    </button>
    <button onClick={contadorHandler.decrementarContador}>
      Decrementar contador
    </button>
  </div>
);

export class ComunicacionComponentes extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  decrementarContador = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Comunicación entre componentes</h2>
        <h3>{this.state.contador}</h3>
        <Hijo
          contadorHandler={{
            incrementarContador: this.incrementarContador,
            decrementarContador: this.decrementarContador,
          }}
          msg="Mensaje para el componente hijo"
        />
      </div>
    );
  }
}
