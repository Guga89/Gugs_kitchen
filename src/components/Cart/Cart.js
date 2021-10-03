import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart-context";
import CartItem from "../UI/CartItem";
import useIcons from "../UI/Icons";
import styles from "./Cart.module.css"

const Cart = (props) => {
    const { trash, order } = useIcons()
    const { items, totalAmount, clearAll } = useContext(CartContext)
    const cartItems = [...items]

    const [name, setName] = useState('Guga')
    const [address, setAddress] = useState('Wu He Road 328')
    const [notes, setNotes] = useState('Medium spicy!')
    const [phoneNumber, setPhoneNumber] = useState('15733111554')
    const [orderFormStyles, setOrderFormStyles] = useState(styles.orderForm)
    const [isConfirmed, setIsConfirmed] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        const order = { name, phoneNumber, address, cartItems, notes }
        // setLoading(true);

        fetch('https://react-dummy-server-default-rtdb.firebaseio.com/orders', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            // body: JSON.stringify(order),
            body: order,
        })
            .then(() => {
                console.log('Order succesfully submitted!')
                // setLoading(false)
                // history.go(-1) //will redirect to the previous page before the creat form
                // history.push('/')
            })
    }

    const showAddressConfirmation = () => {
        setOrderFormStyles(styles.orderForm + ' ' + styles.confirm)
        setIsConfirmed(true)
    }
    const hideAddressConfirmation = () => {
        setOrderFormStyles(styles.orderForm)
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
                    ? <button className={styles.order} onClick={hideAddressConfirmation}>Cancel</button>
                    : <button className={styles.order} onClick={showAddressConfirmation}>Make an Order{order.icon}</button>
                }
                <button className={styles.clearAll} onClick={clearAll}>Clear all {trash.icon}</button>
            </div>

            <div className={styles.formContainer}>
                <form className={orderFormStyles} onSubmit={handleSubmit}>
                    <div className="name">
                        <label htmlFor="name">Enter your name</label>
                        <input type="text" id="name" name="name" required value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="phoneNumber">
                        <label htmlFor="phoneNumber">Enter your phone number</label>
                        <input type="text" id="phoneNumber" phoneNumber="phoneNumber" required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                    </div>
                    <div className="address">
                        <label htmlFor="address">Delivery address</label>
                        <textarea name="address" id="address" cols="40" rows="2" required value={address} onChange={e => setAddress(e.target.value)}></textarea>
                    </div>
                    <div className="notes">
                        <label htmlFor="notes">Notes!</label>
                        <textarea name="notes" id="notes" cols="20" rows="1" required value={notes} onChange={e => setNotes(e.target.value)}></textarea>
                    </div>

                    <button className={styles.order}>Confirm delivery information</button>
                </form>
            </div>

        </div>
    );
}

export default Cart;