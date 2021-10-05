import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart-context";
import styles from "./OrderConfirmForm.module.css"


const ConfirmForm = (props) => {
    const { items } = useContext(CartContext)
    const cartItems = [...items]

    const [name, setName] = useState('Guga')
    const [address, setAddress] = useState('Wu He Road 328')
    const [notes, setNotes] = useState('Medium spicy!')
    const [phoneNumber, setPhoneNumber] = useState('15733111554')

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



    return (
        <div className={styles.formContainer}>
            <form className={props.orderFormStyles} onSubmit={handleSubmit}>
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

                <button className={styles.orderButton}>Confirm delivery information</button>
            </form>
        </div>
    );
}

export default ConfirmForm;