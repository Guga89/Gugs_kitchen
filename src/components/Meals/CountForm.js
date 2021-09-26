import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import styles from "./CountForm.module.css"
const CountForm = (props) => {

    const { items } = useContext(CartContext)

    let inCartAmount;

    if (items.length > 0) {
        const cartItemIndex = items.findIndex(item => item.id === props.id);
        if (cartItemIndex !== undefined) {
            inCartAmount = { ...items[cartItemIndex] }.amount;
        } else {

        }
    } else {
        inCartAmount = 0
    }


    const increase = () => {
        props.addItemToCart(1)
    }

    const decrease = () => {
        props.removeItemFromCart(props.id)
    }


    return (
        <div className={styles["counter-container"]}>
            <i onClick={decrease} className={inCartAmount > 0 ? styles.minus : styles.hidden}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg></i>
            {/* <input className={count === 0 ? styles.hidden : styles["count-input"]} type="text" value={inCartAmount} onChange={inputHandler} min="0" /> */}
            <span className={inCartAmount > 0 ? styles["count-input"] : styles.hidden}>{inCartAmount}</span>
            <i onClick={increase} className={styles.plus}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg></i>
        </div>
    );
}

export default CountForm;