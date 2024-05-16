import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<h1>Hola mundo</h1>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
