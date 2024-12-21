import { useSelector } from 'react-redux';
import css from './Features.module.css'
import { useParams } from 'react-router-dom';

const Features = () => {
        const { id } = useParams();
        const camper = useSelector((state) =>
            state.campers.campers.find((c) => c.id === id)
        );

if (!camper) return <p>No data available</p>
const {
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    gas,
    form,
    length,
    width,
    height,
} = camper;

    return (
        <div className={css.features}>
            <section>
                <ul>
                    {transmission && <li>Transmission: {transmission}</li>}
                    {engine && <li>Engine: {engine}</li>}
                    {AC && <li>Air Conditioning: Yes</li>}
                    {bathroom && <li>Bathroom: Yes</li>}
                    {kitchen && <li>Kitchen: Yes</li>}
                    {TV && <li>TV: Yes</li>}
                    {gas && <li>Gas Supply: Yes</li>}
                </ul>
            </section>
            <section>
                <p>Vehicle details</p>
                <ul>
                    {form && <li>Form: {form}</li>}
                    {length && <li>Length: {length}</li>}
                    {width && <li>Width: {width}</li>}
                    {height && <li>Height: {height}</li>}
                </ul>
            </section>
        </div>
    )
}

export default Features;
