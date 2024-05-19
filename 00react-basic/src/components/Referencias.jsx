import React, { createRef, useRef } from "react";

export default function Referencias() {
  // let refMenu = createRef()  PARA COMPONENTES DE CLASE
  let refMenu = useRef(),
    refMenuBtn = useRef();

  const menuHandler = () => {
    // current es donde se guarda el elemento, si se define la variable con useRef pero no se define en ningún elemento current será undefined
    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }
  };
  return (
    <div>
      <h2>Referencias component</h2>
      <button ref={refMenuBtn} onClick={menuHandler}>
        Menú
      </button>
      <nav ref={refMenu} style={{ display: "none" }}>
        <a href="#">Sección 1</a>
        <br />
        <a href="#">Sección 2</a>
        <br />
        <a href="#">Sección 3</a>
        <br />
        <a href="#">Sección 4</a>
        <br />
        <a href="#">Sección 5</a>
        <br />
      </nav>
    </div>
  );
}
