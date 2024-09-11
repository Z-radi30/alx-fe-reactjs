// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    const ingredientList = ingredients.split('\n').filter(item => item.trim());
    if (ingredientList.length < 2) {
      newErrors.ingredients = 'Please add at least two ingredients';
    }

    if (!steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    }

    return Object.keys(newErrors).length === 0 ? null : newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (formErrors === null) {
      console.log('Valid form submission:', { title, ingredients, steps });
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto bg-white rounded-lg shadow-md px-6 py-8">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.title ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
            }`}
          />
          {errors.title && <p className="mt-1 text-xs text-red-600">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-1">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            rows={5}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.ingredients ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
            }`}
          />
          {errors.ingredients && <p className="mt-1 text-xs text-red-600">{errors.ingredients}</p>}
        </div>

        <div>
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700 mb-1">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            rows={5}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.steps ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
            }`}
          />
          {errors.steps && <p className="mt-1 text-xs text-red-600">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full disabled:opacity-50"
          disabled={!title.trim() || ingredients.split('\n').filter(item => item.trim()).length < 2 || !steps.trim()}
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
