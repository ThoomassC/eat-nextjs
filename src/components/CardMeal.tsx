import React from "react";
import { FaClock, FaStar, FaUtensils } from "react-icons/fa";

type CardMealProps = {
  readonly title: string;
  readonly description: string;
  readonly difficulty: number;
  readonly time: number;
  readonly averageNote: number;
  readonly image: string;
};

export default function CardMeal({
  title,
  description,
  difficulty,
  time,
  averageNote,
  image,
}: CardMealProps) {
  return (
    <div
      className="p-4 rounded-lg shadow-lg"
      style={{
        backgroundColor: "#F5F5DC",
        border: "2px solid #8B4513",
      }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h2
        className="text-xl font-bold mb-2"
        style={{
          color: "#FFD700",
          fontFamily: "'Cinzel', serif",
        }}
      >
        {title}
      </h2>
      <p className="text-sm mb-4" style={{ color: "#8B0000" }}>
        {description}
      </p>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <FaUtensils style={{ color: "#8B4513" }} />
          <span style={{ color: "#8B4513" }}>Difficulté : {difficulty}/5</span>
        </div>
        <div className="flex items-center gap-2">
          <FaClock style={{ color: "#8B4513" }} />
          <span style={{ color: "#8B4513" }}>{time} min</span>
        </div>
        <div className="flex items-center gap-2">
          <FaStar style={{ color: "#FFD700" }} />
          <span style={{ color: "#8B4513" }}>{averageNote}/5</span>
        </div>
      </div>
    </div>
  );
}
