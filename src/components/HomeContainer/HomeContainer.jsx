import css from './HomeContainer.module.css';

const HomeContainer = () => {
    return (
        <div className={css.container_home}>
            <h2 className={css.h2}>Campers of your dreams</h2>
            <p className={css.p}>You can find everything you want in our catalog</p>
            <button type='button' className={css.btn_home}>View Now</button>
        </div>
    )
}

export default HomeContainer;
