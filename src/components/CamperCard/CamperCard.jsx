import css from './CamperCard.module.css';



const CamperCard = ({
    imageUrl,
    description,
    title,
    reviews,
    location,
    price,
    transmission,
    engine,
    kitchen,
    AC,
    onShowMore
}) => {
const shortDescr = (text, limit) => {
    if (text.length <= limit) return text;
    return text.substring(0, limit) + '...';
};

    return (
        <div className={css.card}>
            <div className={css.img}>
                <img src={imageUrl} alt={title} className={css.image} />
            </div>

            <div className={css.details}>
                <div className={css.header}>
                    <h2 className={css.title}>{title}</h2>
                    <p className={css.price}>€{price}.00</p>
                </div>
                <div className={css.meta}>
                    <span>{reviews} Reviews</span>
                    <span>{location}</span>
                </div>
                <p className={css.p_card}>{shortDescr(description, 40)}</p> 
                <div className={css.features}>
                    <p>
                    {/* <svg className="icon icon-Vector">
                        <use href="/symbol_defs.svg#icon-Vector"></use>
                    </svg> */}
                    {transmission}
                    </p>
                    <p>
                    {/* <svg className="icon icon-fuel-pump">
                        <use href="/symbol_defs.svg#icon-fuel-pump"></use>
                        </svg> */}
                    {engine}
                    </p>
                    <p>
                    {/* <svg className="icon icon-cup-hot">
                        <use href="/symbol_defs.svg#icon-cup-hot"></use>
                        </svg> */}
                    {kitchen}Kitchen
                    </p>
                    <p>
                    {/* <svg className="icon icon-wind">
                        <use href="/symbol_defs.svg#icon-wind"></use>
                        </svg> */}
                    {AC}AC
                    </p>
                </div>
                <button className={css.button} onClick={onShowMore}>
                    Show more
                </button>
            </div>
        </div>
    );
};


export default CamperCard;