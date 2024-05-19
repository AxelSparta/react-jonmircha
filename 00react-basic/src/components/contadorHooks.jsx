import React, { useState } from "react";

export default function ContadorHooks(props) {
  const [contador, setContador] = useState(0);
  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);
  return (
    <div>
      <h2>Hooks</h2>
      <h3>Contador: {contador}</h3>
      <nav>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
      </nav>
    </div>
  );
}

ContadorHooks.defaultProps = {
  titulo: "Clicks",
};
