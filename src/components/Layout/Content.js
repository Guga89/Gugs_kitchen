import { useState } from "react";
import Cart from "../Cart/Cart";
import CartButton from "../Cart/CartButton";
import MealList from "../Meals/MealList";
import Backdrop from "../UI/Backdrop";
import styles from "./Content.module.css"

const Content = (props) => {

    const [CartIsShown, setCartIsShown] = useState(false)

    const showCart = () => {
        setCartIsShown(true)
    }

    const hideCart = () => {
        setCartIsShown(false)
    }

    return (
        <div className={styles.content}>
            {CartIsShown && <Backdrop hideCart={hideCart} />}
            <CartButton showCart={showCart} hideCart={hideCart} CartIsShown={CartIsShown} />
            {CartIsShown && <Cart />}
            <MealList meals={props.meals} />
        </div>
    );
}

export default Content;