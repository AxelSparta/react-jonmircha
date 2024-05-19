import React, { Component } from "react";

export default class CicloDeVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: new Date().toLocaleTimeString(),
    };
    console.log(0, "El componente se inicializa, aún no está en el DOM");
    this.temporizador = null;
  }

  startTime = (e) => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  stopTime = (e) => {
    clearInterval(this.temporizador);
  };

  componentDidMount() {
    console.log(1, "El componente ya se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props del componente han cambiado");
    console.log(prevProps, prevState);
  }

  componentWillUnmount() {
    console.log(3, "El componente ha sido eliminado del DOM");
  }

  render() {
    console.log(
      4,
      "El componente se renderiza por primera vez o por algún cambio de las props o el estado del mismo"
    );
    return (
      <div>
        <h2>Ciclo de vida de los componentes</h2>
        <p>{this.state.hora}</p>
        <button onClick={this.startTime}>Iniciar reloj</button>
        <button onClick={this.stopTime}>Detener reloj</button>
      </div>
    );
  }
}
