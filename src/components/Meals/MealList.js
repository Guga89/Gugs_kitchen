import FoodItem from "./Food";
import styles from "./MealList.module.css"
const MealList = (props) => {
    return (
        <div className={styles["meal-list"]}>
            {props.meals.map(food => { return <FoodItem name={food.name} price={food.price} img={food.img} key={food.name} id={food.id} /> })}
        </div>

    );
}

export default MealList;