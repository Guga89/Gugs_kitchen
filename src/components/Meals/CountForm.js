import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart-context";
import styles from "./CountForm.module.css"
const CountForm = (props) => {

    const { items } = useContext(CartContext)

    let inCartAmount = 0;

    if (items.length > 0) {

        const cartItemIndex = items.findIndex(item => item.id === props.id);
        inCartAmount = { ...items[cartItemIndex] }.amount;

    }

    const [count, setCount] = useState(items.length > 0 ? inCartAmount : 0)

    const increase = () => {
        setCount(count + 1)
        props.addItemToCart(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
        props.removeItemFromCart(props.id)
    }

    const inputHandler = (e) => {
        setCount(Number(e.target.value))
    }


    return (
        <div className={styles["counter-container"]}>
            <form action="">
                <i onClick={decrease} className={count === 0 ? styles.hidden : styles.minus}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg></i>
                <input className={count === 0 ? styles.hidden : styles["count-input"]} type="text" value={count} onChange={inputHandler} min="0" />
                <i onClick={increase} className={styles.plus}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg></i>
            </form>
        </div>
    );
}

export default CountForm;