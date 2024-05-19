import { useState, useEffect } from "react";

export const useFetch = (url) => {
  let [isPending, setIsPending] = useState(true),
    [data, setData] = useState(null),
    [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: res.statusText || "Ocurrió un error",
          };
        }
        const data = await res.json();
  
        setIsPending(false);
        setData(data);
        setError({ err: false });

      } catch (error) {
        setIsPending(false);
        setError(error);
      }
    };

    getData(url);
  }, [url]);

  return { isPending, data, error };
};
