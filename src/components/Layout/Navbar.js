import { Fragment } from "react";
import Logo from '../../assets/Logo.png'
import useIcons from "../UI/Icons";
import styles from './Navbar.module.css'

const Navbar = () => {

    const { home, account, menu, takeAway, add } = useIcons()


    return (
        <Fragment>
            <div className={styles.navbar}>
                <img src={Logo} className={styles.logo} alt="Logo" />
                <ul>
                    <li className={styles['list'] + ' ' + styles['active']}>
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className={styles['icon']}>{home}</span>
                            <span className={styles['title']}>Home</span>
                        </a>
                    </li>
                    <li className={styles['list']}>
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className={styles['icon']}>{menu}</span>
                            <span className={styles['title']}>Menu</span>
                        </a>
                    </li>
                    <li className={styles['list']}>
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className={styles['icon']}>{takeAway}</span>
                            <span className={styles['title']}>Take aways</span>
                        </a>
                    </li>
                    <li className={styles['list']}>
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className={styles['icon']}>{account}</span>
                            <span className={styles['title']}>My Account</span>
                        </a>
                    </li>
                    <li className={styles['list']}>
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className={styles['icon']}>+</span>
                            <span className={styles['title']}>Add</span>
                        </a>
                    </li>

                </ul>
            </div>
        </Fragment>
    );
}

export default Navbar;