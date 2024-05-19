import React, { Component } from "react";

const Pokemon = (props) => {
  return (
    <figure>
      <img src={props.avatar} alt={props.name}></img>
      <figcaption>{props.name}</figcaption>
    </figure>
  );
};

export default class PeticionesAjax extends Component {
  state = {
    pokemons: [],
  };

  getPokemons = async () => {
    let pokemons = [];
    let res = await fetch("https://pokeapi.co/api/v2/pokemon");
    let json = await res.json();
    json.results.forEach(async (el) => {
      let res = await fetch(el.url);
      let json = await res.json();
      pokemons.push({
        id: json.id,
        name: json.name,
        avatar: json.sprites.front_default,
      });
      this.setState({
        pokemons,
      });
    });
  };

  componentDidMount() {
    this.getPokemons();
  }

  render() {
    return (
      <div>
        <h2>Peticiones Ajax</h2>
        <div className="pokemons-container">
          {this.state.pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} id={el.id} avatar={el.avatar} />
          ))}
        </div>
        <div className="button-container">
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
    );
  }
}
