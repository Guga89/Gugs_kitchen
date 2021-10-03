import { Fragment, useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/cart-context';
import styles from './CartButton.module.css'
import useIcons from '../UI/Icons'


const CartButton = (props) => {

    const { items, totalAmount } = useContext(CartContext)
    const { cancel, cart } = useIcons();

    const [btnHighlighted, setBtnHighlighted] = useState(false)

    const btnClasses = `${styles["cart-button"]} ${btnHighlighted ? styles.bump : ''}`
    const totalItems = items.reduce((currentAmount, item) => { return currentAmount + item.amount }, 0)


    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnHighlighted(true)

        const timer = setTimeout(() => {
            setBtnHighlighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])


    return (
        <Fragment>
            {!props.CartIsShown && items.length > 0 && <div className={btnClasses} onClick={props.showCart} >
                <div className={styles["cart-icon"]}>
                    {cart.icon}
                </div>
                <div className={styles["cart-item-count"]}>
                    {totalItems}
                </div>
                <div className={styles["cart-sum-count"]}>
                    Amount - {totalAmount} $
                </div>
            </div>}
            {props.CartIsShown && <div className={styles["cart-button__cancel"]} onClick={props.hideCart}>
                {cancel.icon}
            </div>}

        </Fragment>
    );
}

export default CartButton;