import React, { Component } from "react";

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    // Cada vez que se actualiza el estado o cambia las props que recibe el componente se vuelve a renderizar
    setInterval(() => {
      this.setState({
        contador: this.state.contador + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h2>El componente de estado</h2>
        <p>{this.state.contador}</p>
        <p>{this.props.title}</p>
      </div>
    );
  }
}
