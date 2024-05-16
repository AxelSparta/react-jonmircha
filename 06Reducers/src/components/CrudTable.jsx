import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
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
        {!data.length ? (
          <tr>
            <th colSpan={3}>No hay datos</th>
          </tr>
        ) : (
          data.map((el) => (
            <CrudTableRow
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
              key={el.id}
              el={el}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default CrudTable;
