import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart-context";
import Cart from "../Cart/Cart";
import CartButton from "../Cart/CartButton";
import MealList from "../Meals/MealList";
import Backdrop from "../UI/Backdrop";
import styles from "./Content.module.css"

const Content = (props) => {
    const { items } = useContext(CartContext)

    const [CartIsShown, setCartIsShown] = useState(false)

    const showCart = () => {
        setCartIsShown(true)
    }

    const hideCart = () => {
        setCartIsShown(false)
    }

    useEffect(() => {
        if (items.length === 0) {
            setCartIsShown(false)
        }
    }, [items.length])

    return (
        <div className={styles.content}>
            {items.length > 0 && CartIsShown && <Backdrop hideCart={hideCart} />}
            {items.length > 0 && <CartButton showCart={showCart} hideCart={hideCart} CartIsShown={CartIsShown} />}
            {items.length > 0 && CartIsShown && <Cart />}
            <MealList meals={props.meals} />
        </div>
    );
}

export default Content;