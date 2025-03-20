import React, { useState } from "react";
import { FaClock, FaStar, FaUtensils } from "react-icons/fa";

type CardMealProps = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly difficulty: number;
  readonly time: number;
  readonly averageNote: number;
  readonly image: string;
};

export default function CardMeal({
  id,
  title,
  description,
  difficulty,
  time,
  averageNote,
  image,
}: CardMealProps) {
  const [newNote, setNewNote] = useState<number | null>(null);
  const [currentAverage, setCurrentAverage] = useState(averageNote);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newNote === null || newNote < 0 || newNote > 5) {
      alert("Veuillez entrer une note valide entre 0 et 5.");
      return;
    }

    try {
      const updatedAverage = (currentAverage + newNote) / 2;

      const response = await fetch("/api/recipes", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          averageNote: updatedAverage,
        }),
      });

      if (response.ok) {
        setCurrentAverage(updatedAverage);
        alert("Note mise à jour avec succès !");
      } else {
        alert("Erreur lors de la mise à jour de la note.");
      }
    } catch (error) {
      console.error("Erreur :", error);
      alert("Une erreur est survenue.");
    }
  };

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
      <div className="flex items-center justify-between text-sm mb-4">
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
          <span style={{ color: "#8B4513" }}>
            {currentAverage.toFixed(1)}/5
          </span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="number"
          min="0"
          max="5"
          step="0.1"
          value={newNote ?? ""}
          onChange={(e) => setNewNote(Number(e.target.value))}
          placeholder="Entrez une note (0-5)"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-yellow-300"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 rounded"
          style={{
            backgroundColor: "#FFD700",
            color: "#8B4513",
            fontWeight: "bold",
          }}
        >
          Soumettre la note
        </button>
      </form>
    </div>
  );
}
