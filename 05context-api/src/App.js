import React from "react";
import CrudApi from "./components/CrudApi";
import MyPage from "./components/MyPage";
import { CrudProvider } from "./context/CrudContext";
function App() {
  return (
    <div>
      <h1>Context API</h1>
      <hr />
      <CrudProvider>
        <CrudApi />
      </CrudProvider>
      <hr />
      <MyPage />
    </div>
  );
}

export default App;
