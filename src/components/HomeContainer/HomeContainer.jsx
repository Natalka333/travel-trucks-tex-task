import css from './HomeContainer.module.css';
import { useNavigate } from 'react-router-dom';


const HomeContainer = () => {
    const navigate = useNavigate();
const handleNavigate = () => {
    navigate('/catalog');
}


    return (
        <div className={css.container_home}>
            <h2 className={css.h2}>Campers of your dreams</h2>
            <p className={css.p}>You can find everything you want in our catalog</p>
            <button onClick={handleNavigate} className={css.btn_home}>View Now</button>
        </div>
    )
}

export default HomeContainer;
