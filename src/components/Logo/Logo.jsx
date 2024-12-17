import css from './Logo.module.css';



const Logo = () => {
    return (
        <div className={css.logo}>
            <span className={css.travel}>Travel</span>
            <span className={css.trucks}>Trucks</span>
        </div>
    );
};

export default Logo;

