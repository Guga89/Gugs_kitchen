import { useState } from "react";
import styles from './NavListItem.module.css'

const NavList = (props) => {
    const [isActive, setIsActive] = useState(props.navItem.isActive)

    const notActiveItem = styles.list
    const activeItem = styles.list + ' ' + styles.active


    const makeActive = () => {
        setIsActive(true);
    }

    return (
        <li className={props.index === 0 || isActive ? activeItem : notActiveItem} onClick={makeActive}>
            <b></b>
            <b></b>
            <a href="#">
                <span className={styles.icon}>{props.navItem.icon}</span>
                <span className={styles.title}>{props.navItem.name}</span>
            </a>
        </li>
    );
}

export default NavList;