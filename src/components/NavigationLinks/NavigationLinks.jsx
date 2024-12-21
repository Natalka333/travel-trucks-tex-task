import { NavLink } from "react-router-dom"; 
import css from "./NavigationLinks.module.css";

const NavigationLinks = () => {
    return (
        <nav className={css.nav}>
            <NavLink
                to="features"
                className={({ isActive }) => isActive ? css.active : css.link}
            >
                Features
            </NavLink>
            <NavLink
                to="reviews"
                className={({ isActive }) => isActive ? css.active : css.link}
            >
                Reviews
            </NavLink>
        </nav>
    );
};

export default NavigationLinks;
