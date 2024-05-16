import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";


const CrudApi = () => {
  const { loading, error, db } = useContext(CrudContext);

  return (
    <div>
      <h2>Crud App con context api</h2>
      <CrudForm />
      {loading && <Loader />}
      {error && <Message msg={error.statusText} bgColor={"#dc3545"} />}
      {db && <CrudTable />}
    </div>
  );
};

export default CrudApi;
