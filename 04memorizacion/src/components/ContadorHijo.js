import { memo } from "react";

const ContadorHijo = ({ contador, sumar, restar }) => {
  console.log("Hijo del contador se renderiza");
  return (
    <div style={{ border: "thin solid #000", margin: "1rem", padding: "1rem" }}>
      <h2>Hijo del contador</h2>
      <h3>{contador}</h3>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </div>
  );
};

export default memo(ContadorHijo);
