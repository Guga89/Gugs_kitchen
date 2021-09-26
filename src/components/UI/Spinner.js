import SpinnerGIF from '../../assets/Spinner.gif'
import styles from './Spinner.module.css'


const Spinner = () => {
    return (
        <div className={styles['spinner-container']}>
            <img src={SpinnerGIF} alt="" />
        </div>
    );
}

export default Spinner;