import CountForm from '../Meals/CountForm'
import styles from './Card.module.css'

const Card = (props) => {
    return (
        <div className={styles["card"]}>
            <div className={styles["card-img"]}>
                <img src={props.item.img} alt={props.item.name} />
            </div>
            <div className={styles["card-details"]}>
                <div>
                    <h3>{props.item.name}</h3>
                    <h3>{props.item.price}</h3>
                </div>
                <CountForm amount={props.item.amount} />
            </div>
        </div>
    );
}

export default Card;