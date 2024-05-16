import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  const handleEdit = (e) => {
    setDataToEdit(el);
  };
  const handleDelete = (e) => {
    deleteData(el.id);
  };

  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.constellation}</td>
      <td>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
