import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart-context";
import CartItem from "../UI/CartItem";
import useIcons from "../../hooks/useIcons";
import styles from "./Cart.module.css"
import stylesForm from '../UI/OrderConfirmForm.module.css'
import OrderConfirmForm from '../UI/OrderConfirmForm'

const Cart = (props) => {
    const { trash, order2 } = useIcons()
    const { items, totalAmount, clearAll } = useContext(CartContext)
    const cartItems = [...items]
    const [isConfirmed, setIsConfirmed] = useState(false)
    const [orderFormStyles, setOrderFormStyles] = useState(stylesForm.orderForm)


    const showAddressConfirmation = () => {
        setOrderFormStyles(stylesForm.orderForm + ' ' + stylesForm.confirm)
        setIsConfirmed(true)
    }
    const hideAddressConfirmation = () => {
        setOrderFormStyles(stylesForm.orderForm)
        setIsConfirmed(false)
    }


    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                <div className={styles.cartItems}>
                    {cartItems.map((item) => { return <CartItem item={item} key={item.id} /> })}
                </div>
            </div>

            <div className={styles.cartHeader}>
                <h2>Total amount {totalAmount}$</h2>
                {isConfirmed
                    ? <button className={styles.orderButton} onClick={hideAddressConfirmation}>Cancel</button>
                    : <button className={styles.orderButton} onClick={showAddressConfirmation}>Make an Order {order2.icon}</button>
                }
                <button className={styles.clearAll} onClick={clearAll}>Clear all {trash.icon}</button>
            </div>

            <OrderConfirmForm orderFormStyles={orderFormStyles} />
        </div>
    );
}

export default Cart;