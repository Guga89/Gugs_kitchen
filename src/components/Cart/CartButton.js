import { Fragment, useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/cart-context';
import styles from './CartButton.module.css'


const CartButton = (props) => {

    const { items, totalAmount } = useContext(CartContext)

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-basket2" viewBox="0 0 16 16">
                        <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z" />
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z" />
                    </svg>
                </div>
                <div className={styles["cart-item-count"]}>
                    {totalItems}
                </div>
                <div className={styles["cart-sum-count"]}>
                    Amount - {totalAmount} $
                </div>
            </div>}
            {props.CartIsShown && <div className={styles["cart-button__cancel"]} onClick={props.hideCart}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                </svg>
            </div>}

        </Fragment>
    );
}

export default CartButton;