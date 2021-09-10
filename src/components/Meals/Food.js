import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import CountForm from './CountForm'
import styles from './Food.module.css'

const FoodItem = (props) => {

    const { addItem, removeItem } = useContext(CartContext)

    const addItemToCart = (amount) => {
        addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            img: props.img,
            amount: amount
        })
    }

    const removeItemFromCart = (id) => { removeItem(id) }


    return (
        <div className={styles["card"]}>
            <img src={props.img} alt="Burger" />
            <div className={styles["card-details"]}>
                <h3>{props.name}</h3>
                <h3>{props.price}</h3>
                <CountForm addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} id={props.id} />
            </div>
        </div>
    );
}

export default FoodItem;

