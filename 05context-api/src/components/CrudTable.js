import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudTableRow from "./CrudTableRow";

const CrudTable = () => {
  const { db: data } = useContext(CrudContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Constelación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {!data || !data.length ? (
          <tr>
            <th colSpan="3">No hay datos</th>
          </tr>
        ) : (
          data.map((el) => <CrudTableRow key={el.id} el={el} />)
        )}
      </tbody>
    </table>
  );
};

export default CrudTable;
