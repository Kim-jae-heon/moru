import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Result.css";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { result } = location.state || { result: "" };

  const handleGetToFirstPage = () => {
    navigate("/");
  };

  return (
    <div className="background-color">
      <div className="container">
        <h1 style={{ textAlign: "center", paddingTop: "30px" }}>고민타파?!</h1>
        <textarea readOnly value={result}></textarea>
        <p style={{ textAlign: "center" }} onClick={handleGetToFirstPage}>
          처음으로 →
        </p>
      </div>
    </div>
  );
}
