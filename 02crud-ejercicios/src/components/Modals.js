import React from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import PortalModal from "./PortalModal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModalPortal, openModalPortal, closeModalPortal] =
    useModal(false);
  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h2>Animal xd</h2>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      <button onClick={openModalPortal}>Modal Portal</button>
      <PortalModal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
        <h2>Modal Portal</h2>
        <p>
          Los portales proporcionan una opción de primera clase para renderizar
          hijos en un nodo DOM que existe por fuera de la jerarquía del DOM del
          componente padre.
        </p>
        <img src="https://placeimg.com/400/400/tech" alt="tech" />
      </PortalModal>
    </div>
  );
};

export default Modals;
