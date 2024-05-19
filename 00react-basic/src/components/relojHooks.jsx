import React, { useState, useEffect } from "react";

const Reloj = (props) => {
  useEffect(() => {
    console.log("Fase de montaje");
    return () => {
      console.log("Componente reloj eliminado");
    };
  }, []);
  return <h3>{props.hour}</h3>;
};

const RelojHooks = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  let intervalTimer;

  useEffect(() => {
    if (!visible) {
      clearInterval(intervalTimer);
    } else {
      intervalTimer = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    }
  }, [visible]);

  return (
    <div>
      <h2>Reloj con hooks</h2>

      {visible && <Reloj hour={hour} />}
      <nav>
        <button onClick={() => setVisible(true)}>Empezar timer</button>
        <button onClick={() => setVisible(false)}>Detener timer</button>
      </nav>
    </div>
  );
};

export default RelojHooks;
