import prisma from "@/libs/prisma";
import { RecipeCard } from "@/components/RecipeCard";

export default async function RecipesPage() {
  const recipes = await prisma.recipe.findMany();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
