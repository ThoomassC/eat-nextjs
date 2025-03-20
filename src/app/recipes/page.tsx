"use client";

import { useEffect, useState } from "react";
import CardMeal from "@/components/CardMeal";
import { faker } from "@faker-js/faker";
import { Recipe } from "@/types/Recipe";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/recipes");
        const data = await response.json();

        const recipesWithImages = data.map((recipe: Recipe) => ({
          ...recipe,
          image: faker.image.url({ width: 640, height: 480 }),
        }));

        setRecipes(recipesWithImages);
      } catch (error) {
        console.error("Erreur lors de la récupération des recettes :", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1
        className="text-3xl font-bold text-center mb-8"
        style={{
          color: "#8B4513",
          fontFamily: "'Cinzel', serif",
        }}
      >
        Nos Recettes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <CardMeal
            key={recipe.id}
            id={String(recipe.id)}
            title={recipe.name}
            description={recipe.description}
            difficulty={recipe.difficulty}
            time={recipe.time}
            averageNote={recipe.averageNote}
            image={recipe.image ?? "/logo.webp"}
          />
        ))}
      </div>
    </div>
  );
}
