import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET() {
  try {
    const recipes = await prisma.recipe.findMany({
      include: {
        ingredients: true,
        steps: true,
      },
    });
    return NextResponse.json(recipes, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const {
      name,
      description,
      difficulty,
      time,
      ingredients,
      steps,
      authorId,
    } = await req.json();

    if (!name || !description || !difficulty || !time || !authorId) {
      return NextResponse.json(
        { message: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    const recipe = await prisma.recipe.create({
      data: {
        name,
        description,
        difficulty,
        time,
        authorId,
        ingredients: {
          create: ingredients, // Tableau d'objets { name, quantity }
        },
        steps: {
          create: steps, // Tableau d'objets { instructions }
        },
      },
    });

    return NextResponse.json(recipe, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "Recipe ID est requis" },
        { status: 400 }
      );
    }

    await prisma.ingredient.deleteMany({
      where: { recipeId: id },
    });

    await prisma.step.deleteMany({
      where: { recipeId: id },
    });

    await prisma.recipe.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "La recette a été suprimée." },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}
export async function PUT(req: Request) {
  try {
    const { id, averageNote } = await req.json();

    if (!id || averageNote === undefined) {
      return NextResponse.json(
        { message: "Les champs Recipe ID et averageNote sont requis" },
        { status: 400 }
      );
    }

    const recipeId = parseInt(id, 10);
    if (isNaN(recipeId)) {
      return NextResponse.json(
        { message: "Recipe ID doit être un entier valide" },
        { status: 400 }
      );
    }

    const updatedRecipe = await prisma.recipe.update({
      where: { id: recipeId },
      data: {
        averageNote,
      },
    });

    return NextResponse.json(updatedRecipe, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
