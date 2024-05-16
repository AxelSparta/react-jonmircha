import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const CrudContext = createContext();

export const CrudProvider = ({ children }) => {
  const [db, setDb] = useState(null);
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
        setDb(res);
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

  const data = {
    db,
    error,
    loading,
    createData,
    updateData,
    dataToEdit,
    setDataToEdit,
    deleteData,
  };
  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export default CrudContext;
