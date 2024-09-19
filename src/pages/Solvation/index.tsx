import React from "react";
import { useNavigate } from "react-router-dom";

import "./Solvation.css";

export default function Solvation() {
  const navigate = useNavigate();

  const [textMessage, setTextMessage] = React.useState("");

  const handleBackToFirstPage = () => {
    navigate("/");
  };
  const handleSendWorriesToGosim = () => {
    // 여기서 textMessage를 조작하여 결과물을 도출
    console.log(textMessage);
    const result = "아 그만 물어봐;;;";

    navigate("/result", { state: { result } });
  };

  // React.useEffect(() => {
  //   console.log(textMessage);
  // }, [textMessage]);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <div
        style={{
          width: "100%",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ textAlign: "center", fontWeight: "bolder" }}>
          고민을 적어주세요!
        </h1>
        <p
          style={{ marginLeft: "15px", zIndex: 1 }}
          onClick={handleBackToFirstPage}
        >
          처음으로!
        </p>
      </div>
      <img
        alt="고민"
        height="100%"
        src={`${process.env.PUBLIC_URL}/stress.png`}
        style={{
          objectFit: "cover",
          opacity: 0.3,
          position: "relative",
          right: "0px",
        }}
        width="100%"
      />
      <textarea
        name=""
        style={{
          position: "absolute",
          top: "30%",
          left: "14%",
          width: "70%",
          height: "50%",
          border: "none",
          resize: "none",
          padding: "10px",
          fontSize: "15px",
        }}
        onChange={(e) => setTextMessage(e.target.value)}
      ></textarea>
      <button
        style={{
          position: "absolute",
          bottom: "80px",
          left: "33%",
          border: "none",
          background: "none",
          padding: 0,
          margin: 0,
          outline: "none",
          cursor: "pointer",
          fontSize: "16px",
          color: "black",
          fontWeight: "bold",
        }}
        onClick={handleSendWorriesToGosim}
      >
        고심이에게 넣어보기 →
      </button>
    </div>
  );
}
