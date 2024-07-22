import styles from "../style/fooditems.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt={food.title} />
      <h2 className={styles.itemTitle}>{food.title}</h2>
      <div className={styles.itemsButtonContainer}>
        <button
          onClick={() => setFoodId(food.id)}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
