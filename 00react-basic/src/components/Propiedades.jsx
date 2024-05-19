import React from "react";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
}

Propiedades.defaultProps = {
  title: "Propiedades",
};
