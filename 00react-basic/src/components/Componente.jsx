import React from "react";

const Componente = (props) => (
  <div>
    <h2>{props.message}</h2>
  </div>
);

// function Componente(props) {
//   return <h2>{props.message}</h2>;
// }

// class Componente extends Component {
//   render() {
//     return <h2>{this.props.message}</h2>;
//   }
// }

export default Componente;
