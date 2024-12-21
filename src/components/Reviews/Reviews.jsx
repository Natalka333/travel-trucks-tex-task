import ReactStars from "react-rating-stars-component"
import { useSelector } from 'react-redux';
import css from './Reviews.module.css';
import { useParams } from "react-router-dom";


const Reviews = () => {
    const { id } = useParams();
    const camper = useSelector((state) =>
        state.campers.campers.find((c) => c.id === id)
    );


    if (!camper?.reviews || camper.reviews.length === 0) {
        return <p>No reviews yet</p>;
    }
    return (
        <section className={css.reviews}>
            {camper.reviews.map((review, index) => (
                <div key={index} className={css.review}>
                    <h4>{review.reviewer_name}</h4>
                    <ReactStars
                        value={review.reviewer_rating}
                        count={5}
                        size={20}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p>{review.comment}</p>
                </div>
            ))}
        </section>
    );
};

export default Reviews;
