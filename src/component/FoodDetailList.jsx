export default function FoodDetailList({ isLoading, food }) {
  return (
    <div>
      {isLoading ? (
        "it's Loading"
      ) : (
        <li>{food.analyzedInstructions[0].steps.map((item) => item.step)}</li>
      )}
    </div>
  );
}
