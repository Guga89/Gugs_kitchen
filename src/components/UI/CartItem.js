import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'
import styles from './Card.module.css'

const Card = (props) => {
    const { addItem, removeItem } = useContext(CartContext)

    let amount = props.item.amount
    const addOne = () => {
        amount += 1;
        addItem({
            id: props.item.id,
            name: props.item.name,
            price: props.item.price,
            img: props.item.img,
            amount: amount
        })
    }

    const amountHandler = (amount) => {

    }

    // const removeItemFromCart = removeItem(props.id)

    return (
        <div className={styles["card"]}>
            <div className={styles["card-img"]}>
                <img src={props.item.img} alt={props.item.name} />
            </div>
            <div className={styles["card-details"]}>
                <div>
                    <h3>{props.item.name}</h3>
                    <h3>{props.item.price}</h3>
                </div>
                <div className={styles["cart-item-counter-container"]}>
                    <button className={styles["cart-item-counter-button"]}> -</button>
                    <h3>{props.item.amount}</h3>
                    <button className={styles["cart-item-counter-button"]} onClick={addOne}> +</button>
                </div>
            </div>
        </div>
    );
}

export default Card;