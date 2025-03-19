import React from "react";

type CardInformationProps = {
  readonly title: string;
  readonly content: React.ReactNode;
};

export default function CardInformation({
  title,
  content,
}: CardInformationProps) {
  return (
    <div
      className="p-6 rounded-lg shadow-lg"
      style={{
        backgroundColor: "#F5F5DC",
        border: "2px solid #8B4513",
      }}
    >
      <h2
        className="text-2xl font-bold mb-4"
        style={{
          color: "#FFD700",
          fontFamily: "'Cinzel', serif",
        }}
      >
        {title}
      </h2>
      <div className="text-lg" style={{ color: "#8B0000" }}>
        {content}
      </div>
    </div>
  );
}
