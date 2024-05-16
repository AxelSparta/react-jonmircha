import React, { useState, useEffect } from "react";
import { useReducer } from "react";
import { CRUD_TYPES } from "../actions/crudActions";
import { helpHttp } from "../helpers/helpHttp";
import { crudInitialState, crudReducer } from "../reducers/crudReducer";

import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const { db } = state;
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  const getData = () => {
    setLoading(true);
    api
      .get(url)
      .then((res) => {
        dispatch({ type: CRUD_TYPES.READ_ALL_DATA, payload: res });
      })
      .catch((err) => {
        if (!err.err) {
          if (typeof err === "object") {
            setError({ statusText: "Ocurrió un error" });
          } else {
            setError({ statusText: err });
          }
        } else {
          setError(err);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createData = (data) => {
    let options = {
      headers: {
        "content-type": "application/json",
      },
      body: data,
    };
    api
      .post(url, options)
      .then((res) => {
        getData();
      })
      .catch((err) => {
        setError(err);
      });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      headers: {
        "content-type": "application/json",
      },
      body: data,
    };
    api
      .put(endpoint, options)
      .then((res) => {
        getData();
      })
      .catch((err) => setError(err));
  };

  const deleteData = (id) => {
    let isDelete = window.confirm("Estás seguro?");
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: {
          "content-type": "application/json",
        },
      };
      api
        .del(endpoint, options)
        .then((res) => getData())
        .catch((err) => setError(err));
    }
  };
  return (
    <div>
      <h2>Crud App</h2>
      <CrudForm
        dataToEdit={dataToEdit}
        createData={createData}
        updateData={updateData}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader />}
      {error && <Message msg={error.statusText} bgColor={"#dc3545"} />}
      {db && (
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
    </div>
  );
};

export default CrudApi;
