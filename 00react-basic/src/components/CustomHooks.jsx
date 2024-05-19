import React, { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

const CustomHooks = () => {
  let { isPending, data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(isPending, data, error);

  return (
    <div>
      <h2>Custom hooks</h2>
    </div>
  );
};

export default CustomHooks;
