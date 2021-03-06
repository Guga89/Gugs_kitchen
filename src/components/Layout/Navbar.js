import Logo from '../../assets/Logo.png'
import useIcons from "../../hooks/useIcons";
import styles from './Navbar.module.css'
import NavListItem from "./NavListItem";


const Navbar = () => {
    const { home, account, menu, takeAway } = useIcons()
    const navList = [home, menu, takeAway, account]


    return (
        <div className={styles.navbar}>
            <img src={Logo} className={styles.logo} alt="Logo" />
            <ul>
                {navList.map((item, index) => {
                    item.isActive = false;
                    return <NavListItem navItem={item} key={index} index={index} />
                })}
            </ul>


        </div>
    );
}

export default Navbar;