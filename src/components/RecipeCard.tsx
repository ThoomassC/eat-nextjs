import { Recipe } from "@/types/Recipe";

type RecipeCardProps = {
  recipe: Recipe;
};

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{recipe.name}</h2>
      <p>{recipe.description}</p>
      <p>Temps : {recipe.time} minutes</p>
      <p>Difficulté : {recipe.difficulty}/5</p>
    </div>
  );
};
