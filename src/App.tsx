import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Solvation from "./pages/Solvation";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Solvation />} path="/solvation" />
        <Route element={<Result />} path="/result" />
      </Routes>
    </Router>
  );
}

export default App;
