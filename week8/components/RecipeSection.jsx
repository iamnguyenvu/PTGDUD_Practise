import React, { useEffect, useState } from 'react'
import italianTomato from "../src/assets/Lab_02_b/Italian-style tomato.png";
import RecipeCard from './RecipeCard';

const RecipeSection = () => {
    const [ summerRecipes, setSummerRecipes ] = useState([])
    const [ videoRecipes, setVideoRecipes ] = useState([])
    useEffect(() => {
        const fetchRecipes = async () => {
            setSummerRecipes([
                {
                  title: "Italian-style tomato",
                  time: "14 minutes",
                  image: italianTomato,
                },
                {
                  title: "Spaghetti with vegetables and shrimp",
                  time: "15 minutes",
                  image: italianTomato,
                },
                {
                  title: "Lotus delight salad",
                  time: "20 minutes",
                  image: italianTomato,
                },
                {
                  title: "Snack cakes",
                  time: "21 minutes",
                  image: italianTomato,
                },
              ])
            setVideoRecipes([{
                title: "Salad with cabbage and shrimp",
                time: "32 minutes",
                image: italianTomato,
              },
              {
                title: "Salad of cove beans, shrimp and potatoes",
                time: "20 minutes",
                image: italianTomato,
              },
              {
                title: "Sunny-side up fried egg",
                time: "15 minutes",
                image: italianTomato,
              },
              {
                title: "Lotus delight salad",
                time: "20 minutes",
                image: italianTomato,
              },
            ])
        }
  
        fetchRecipes();

    }, [])

  return (
    <div>
         <section className="px-6 py-12">
        <h2 className="text-center text-2xl font-bold text-pink-600 mb-2">
          This Summer Recipes
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We have all your Independence Day sweets covered.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {summerRecipes.map((recipe, i) => (
            <RecipeCard key={i} recipe={recipe} />
          ))}
        </div>
      </section>

      <section className="px-6 py-12 bg-gray-50">
        <h2 className="text-center text-2xl font-bold text-pink-600 mb-2">
          Recipes With Videos
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Cooking Up Culinary Creations with Step-by-Step Videos
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {videoRecipes.map((recipe, i) => (
            <RecipeCard key={i} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default RecipeSection