import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductsPage = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const LIMIT = 20;

  let query = new URLSearchParams(location.search);
  let inicio = parseInt(query.get("inicio")) || 1;
  let fin = parseInt(query.get("fin")) || LIMIT;

  const handlePrev = (e) => {
    navigate(`/products?inicio=${inicio - LIMIT}&fin=${fin - LIMIT}`);
  };

  const handleNext = (e) => {
    navigate(`/products?inicio=${inicio + LIMIT}&fin=${fin + LIMIT}`);
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Productos del {inicio} al {fin}
      </p>
      {inicio > LIMIT && <button onClick={handlePrev}>Prev</button>}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ProductsPage;
