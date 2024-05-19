import React, { Component } from "react";
import data from "../helpers/data.json";

const ListItem = (props) => (
  <li>
    <p>{props.framework.name}</p>
    <a rel="noopener noreferrer" href={props.framework.web} target="_blank">
      {props.framework.web}
    </a>
  </li>
);

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Spring", "Summer", "Autumn", "Winter"],
    };
  }

  render() {
    return (
      <div>
        <h2>Renderizado de elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.seasons.map((el, i) => (
            // Es necesario que cuando iteramos y creamos distintos elementos cada uno de estos tenga un identificador
            <li key={i}>{el}</li>
          ))}
        </ol>
        <h3>Frameworks</h3>
        <ul>
          {data.frameworks.map((el) => (
            <ListItem key={el.id} framework={el} />
          ))}
        </ul>
      </div>
    );
  }
}
