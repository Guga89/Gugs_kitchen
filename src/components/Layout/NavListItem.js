import { NavLink } from "react-router-dom";
import styles from './NavListItem.module.css'

const NavList = (props) => {


    return (

        <NavLink activeClassName={styles.active} to={props.navItem.link}>
            <b></b>
            <b></b>
            <div >
                <span className={styles.icon}>{props.navItem.icon}</span>
                <span className={styles.title}>{props.navItem.name}</span>
            </div>
        </NavLink>

    );
}

export default NavList;