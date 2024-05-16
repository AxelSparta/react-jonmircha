import { useDispatch, useSelector } from "react-redux";

const Contador = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state.contador);
  return (
    <div>
      <h2>Contador redux</h2>
    </div>
  );
};

export default Contador;
