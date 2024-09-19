import React from "react";
import "./Main.css";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  const [showMainPage, setShowMainPage] = React.useState(false);

  const handleMoveSolvation = () => {
    navigate("/solvation");
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainPage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {!showMainPage && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgb(154, 99, 255)",
          }}
        >
          <img
            height="100%"
            src={`${process.env.PUBLIC_URL}/temp1.jpg`}
            style={{ objectFit: "contain" }}
            width="100%"
          />
        </div>
      )}
      {showMainPage && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgb(255, 253, 228)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="bounce" style={{ margin: 0, display: "inline-block" }}>
            클릭해서 고민 상담소로 가보쟈!
          </p>
          <p className="bounce">↓</p>
          <img
            src={`${process.env.PUBLIC_URL}/main1.png`}
            style={{ objectFit: "contain" }}
            width="100%"
            onClick={handleMoveSolvation}
          />
        </div>
      )}
    </div>
  );
}
