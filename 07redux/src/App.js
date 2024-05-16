import { Provider } from "react-redux";
import Contador from "./components/Contador";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Redux</h1>
        <hr />
        <Contador />
      </div>
    </Provider>
  );
};

export default App;
