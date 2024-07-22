import { useEffect, useState } from "react";
import "../style/foodDetailes.css";
import FoodDetailList from "./FoodDetailList";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "b5b154da01ab49ac96f7097752154128";
  console.log(foodId);
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div className="container">
      <div>
        <img className="foodImage" src={food.image} alt={food.title} />
        <h1>{food.title}</h1>
      </div>
      <div className="foodDetail">
        <span>🕰 {food.readyInMinutes} Minutes</span>
        <span>serving {food.servings}</span>
        <span>{food.vegetarian ? "Vegetarian " : " "}</span>
      </div>
      <h2>Instruction</h2>
      <ol>
        <FoodDetailList isLoading={isLoading} food={food} />
      </ol>
    </div>
  );
}
