// src/components/RecipeDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const foundRecipe = data.recipes.find(recipe => recipe.id === parseInt(id));
        if (foundRecipe) {
          setRecipe(foundRecipe);
        }
      })
      .catch(error => console.error('Error fetching recipe:', error));
  }, [id]);

  if (!recipe) return <div className="text-center text-lg p-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 md:text-4xl lg:text-5xl">{recipe.title}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <img src={recipe.image} alt={recipe.title} className="w-full h-auto object-cover rounded-lg shadow-md" />
        
        <div className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Ingredients:</h2>
            <ul className="list-disc pl-4 space-y-2 text-sm sm:text-base">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Instructions:</h2>
            <ol className="list-decimal pl-4 space-y-2 text-sm sm:text-base">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
