import React, { useCallback, useState } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState("");

  // const handleSumar = (e) => setContador(contador + 1);
  const handleSumar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  // const handleRestar = (e) => setContador(contador - 1);
  const handleRestar = useCallback(() => {
    setContador(contador - 1);
  }, [contador]);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador</h2>
      <button onClick={handleSumar}>Sumar</button>
      <button onClick={handleRestar}>Restar</button>
      <h3>{contador}</h3>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <ContadorHijo
        contador={contador}
        sumar={handleSumar}
        restar={handleRestar}
      />
    </div>
  );
};

export default Contador;
