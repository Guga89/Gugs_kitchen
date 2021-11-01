import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import styles from "./OrderConfirmForm.module.css"
import { useFormik } from "formik";
import * as Yup from 'yup'
import useFetch from "../../hooks/useFetch";
import Spinner from "./Spinner";


const ConfirmForm = (props) => {
    const { items } = useContext(CartContext)
    const { postData, isLoading, error } = useFetch();

    const cartItems = [...items]

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            address: '',
            notes: '',
            items: cartItems,
            createOn: Yup.date().default(function () { return new Date() })
        },

        validationSchema: Yup.object({
            name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            phone: Yup.number().min(11, 'Must be 11 digits and without +86 country code').required('Required'),
            address: Yup.string().min(30, "Can't leave blank or short information, leave some address info").required('Required'),
            notes: Yup.string().max(50, "Less specific please..."),
            items: Yup.array().min(1, "Can't make an order without any food in the cart..."),
            // createOn: Yup.date().default(function () { return new Date() })

        }),

        onSubmit: values => { postData({ url: 'https://react-dummy-server-default-rtdb.firebaseio.com/orders.json', method: 'POST', body: values }) }
    })

    return (
        <>
            {isLoading && <Spinner />}
            {!isLoading && <div className={styles.formContainer}>
                <form onSubmit={formik.handleSubmit} className={props.orderFormStyles} >

                    <div>
                        <label htmlFor="name">Enter your name</label>
                        <input id='name' name='name' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} placeholder="Please enter your name" required />
                        {formik.touched.name && formik.errors.name ? (
                            <div className={styles.invalidInputMessage}>{formik.errors.name}</div>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Enter your phone number</label>
                        <input id='phoneNumber' name='phone' type="tel" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} minlength='11' maxlength="11" placeholder='Please enter you number exp.12332112332' required />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className={styles.invalidInputMessage}>{formik.errors.phone}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="address">Enter your delivery address</label>
                        <textarea id='address' address='address' cols="40" rows="1" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} placeholder='exp. 12 street, Building 12, room 12' required />
                        {formik.touched.address && formik.errors.address ? (
                            <div className={styles.invalidInputMessage}>{formik.errors.address}</div>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="notes">Notes</label>
                        <textarea id='notes' notes='notes' cols="20" rows="1" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.notes} placeholder='Notes on your preference... exp. Not spicy, not very salty...' />
                        {formik.touched.notes && formik.errors.notes ? (
                            <div className={styles.invalidInputMessage}>{formik.errors.notes}</div>
                        ) : null}
                    </div>

                    <button type="submit" className={styles.orderButton}>Confirm delivery information</button>
                </form >
            </div>}
        </>
    )


    // const handleSubmit = (e) => {
    //     e.preventDefault();



    //     const order = { name, phoneNumber, address, cartItems, notes }
    //     // setLoading(true);

    //     fetch('https://react-dummy-server-default-rtdb.firebaseio.com/orders.json', {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(order),
    //         // body: order,
    //     })
    //     // .then(() => {
    //     //     console.log('Order succesfully submitted!')
    //     //     // setLoading(false)
    //     //     // history.go(-1) //will redirect to the previous page before the creat form
    //     //     // history.push('/')
    //     // })
    // }



    // return (
    //     <div className={styles.formContainer}>
    //         <form className={props.orderFormStyles} onSubmit={handleSubmit}>
    //             <div className="name">
    //                 <label htmlFor="name">Enter your name</label>
    //                 <input type="text" id="name" name="name" required value={name} onChange={e => setName(e.target.value)} />
    //             </div>
    //             <div className="phoneNumber">
    //                 <label htmlFor="phoneNumber">Enter your phone number</label>
    //                 <input type="text" id="phoneNumber" phoneNumber="phoneNumber" required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
    //             </div>
    //             <div className="address">
    //                 <label htmlFor="address">Delivery address</label>
    //                 <textarea name="address" id="address" cols="40" rows="2" required value={address} onChange={e => setAddress(e.target.value)}></textarea>
    //             </div>
    //             <div className="notes">
    //                 <label htmlFor="notes">Notes!</label>
    //                 <textarea name="notes" id="notes" cols="20" rows="1" required value={notes} onChange={e => setNotes(e.target.value)}></textarea>
    //             </div>

    //             <button className={styles.orderButton}>Confirm delivery information</button>
    //         </form>
    //     </div>
    // );
}

export default ConfirmForm;