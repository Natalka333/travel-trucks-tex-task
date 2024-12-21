import { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { fetchCamperDetails } from "../../redux/campers/operations";
import "react-image-gallery/styles/css/image-gallery.css";
import css from './CardDetails.module.css'
import NavigationLinks from "../NavigationLinks/NavigationLinks";


const CardDetails = () => {
    const { id } = useParams();
    const [camper, setCamper] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCamper = async () => {
            try {
                const data = await fetchCamperDetails(id);
                setCamper(data);
            } catch (err) {
                console.error(err.message);
                setError(err.message);
            }
        };
        loadCamper();
    }, [id]);

    if (error) return <p>Error: {error}</p>;
    if (!camper) return <p>Loading...</p>;

    const {
        name,
        description,
        price,
        gallery,
    } = camper;

    return (
        <div className={css.camper_details}>
            <div className={css.name_container}>
                <h3 className={css.name}>{name}</h3>
                <p className={css.price}>€{price}</p>
                </div>
                {/* <div className={css.meta}>
                    <span>{camper.reviews} Reviews</span>
                    <span>{camper.location}</span>
                </div> */}
            <div className={css.imageContainer}>
                {gallery.map((img, index) => (
                    <img
                        key={index}
                        src={img.original}
                        alt={`Camper Image ${index + 1}`}
                        className={css.image} />
                ))}
            </div>
            <p className={css.p_card}>{description}</p>
            <NavigationLinks />
            
                <Outlet />
            
            <section className={css.booking_form}>
                <h2>Book your campervan now</h2>
                <p>Stay connected! We are always ready to help you.</p>
                <form>
                    <label>
                        
                        <input type="text" placeholder="Name*" />
                    </label>
                    <label>
                        
                        <input type="email" placeholder="Email*" />
                    </label>
                    <label>
                    
                        <input type="date" placeholder="Booking date*" />
                    </label>
                    <label>
                        <textarea placeholder="Comment"></textarea>
                    </label>
                    <button type="submit">Send</button>
                </form>
            </section>
        </div>
    );
};

export default CardDetails;
