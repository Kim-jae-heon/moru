import React from "react";

export default function RandomImageGen() {
  const imageInStringArray = [
    "cider",
    "date",
    "for_hurt",
    "job",
    "like",
    "luck",
    "money_luck",
    "money",
    "self_esteem",
    "self_esteem2",
    "universe",
  ];

  return (
    <div style={{ height: "100vh" }}>
      <img
        alt="이미지 자리"
        height="100%"
        src={`${process.env.PUBLIC_URL}/forMs/reaction_${imageInStringArray.at(Math.ceil(Math.random() * 10))}.jpg`}
        width="100%"
      />
    </div>
  );
}
