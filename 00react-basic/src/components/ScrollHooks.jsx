import React, { useEffect, useState } from "react";

export default function ScrollHooks(props) {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Fase de montaje");
    return () => {
      console.log("fase de desmontaje");
    };
  }, []);

  useEffect(() => {
    console.log("Fase de actualización observando contador 👁️");
  }, [contador]);

  const sumar = (e) => {
    setContador(contador + 1);
  };
  const restar = (e) => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h2>Scroll useEffect</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>Incrementar</button>
        <button onClick={restar}>Decrementar</button>
      </nav>
    </div>
  );
}
