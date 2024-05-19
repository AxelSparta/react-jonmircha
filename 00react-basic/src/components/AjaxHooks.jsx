import React, { useState, useEffect } from "react";

const Pokemon = ({ avatar, name }) => {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
    </figure>
  );
};

const AjaxHooks = (props) => {
  let [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();

        let pokemon = {
          name: json.name,
          id: json.id,
          avatar: json.sprites.front_default,
        };
        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon");
  }, []);

  return (
    <div className="pokemons-container">
      {pokemons.length
        ? pokemons.map((pokemon) => (
            <Pokemon
              key={pokemon.id}
              avatar={pokemon.avatar}
              name={pokemon.name}
            />
          ))
        : "Cargando..."}
    </div>
  );
};

export default AjaxHooks;
