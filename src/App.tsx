import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Solvation from "./pages/Solvation";
import Result from "./pages/Result";
import RandomImageGen from "./pages/RandomImageGen";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Solvation />} path="/solvation" />
        <Route element={<Result />} path="/result" />
        <Route path="/temp">
          <Route index element={<RandomImageGen />} path="random-luck" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
