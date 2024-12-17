import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'
import Logo from '../Logo/Logo';



const Navigation = () => {
    const buildLinkClass = ({ isActive }) => {
        return isActive ? `${css.navLink} ${css.navLinkActive}` : css.navLink;
    };

    return (
        <>
            <div className={css.header_navig}>
                <div className={css.logo_navig}>
                <Logo />
                </div>
                
                <nav className={css.nav}>
                    <NavLink to="/" className={buildLinkClass}>Home</NavLink>
                    <NavLink to="/catalog" className={buildLinkClass}>Catalog</NavLink>
                </nav>
            </div>
        </>
    )
};


export default Navigation;

