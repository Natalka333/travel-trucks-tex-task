import { useState } from "react";
import css from "./FilterPanel.module.css";

const FilterPanel = ({ onFilterChange }) => {
    const [location, setLocation] = useState('');
    const [selectedEquipment, setSelectedEquipment] = useState([]);
    const [vehicleType, setVehicleType] = useState('');

    const handleEquipmentToggle = (equipment) => {
        setSelectedEquipment((prev) =>
            prev.includes(equipment)
                ? prev.filter((item) => item !== equipment)
                : [...prev, equipment]
        );
    };

    const handleSearch = () => {
        const filters = {
            location, 
            form: vehicleType, 
            AC: selectedEquipment.includes("AC") ? 'true' : '-', 
            TV: selectedEquipment.includes("TV") ? 'true' : '-',
            bathroom: selectedEquipment.includes("Bathroom") ? 'true' : '-',
        };
        onFilterChange(filters);
    };
    

    return (
        <aside className={css.filterPanel}>
            <div className={css.location}>
                <label htmlFor="location">Location</label>
                <input
                    id="location"
                    type="text"
                    placeholder="Kyiv, Ukraine"
                    className={css.input}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <div className={css.filters}>
                <p>Filters</p>
                <div className={css.section}>
                    <h4>Vehicle equipment</h4>
                    <div className={css.options}>
                        {['AC', 'Automatic', 'Kitchen', 'TV', 'Bathroom'].map((equipment) => (
                            <button
                                key={equipment}
                                className={`${css.button} ${selectedEquipment.includes(equipment) ? css.active : ''}`}
                                onClick={() => handleEquipmentToggle(equipment)}
                            >
                                {equipment}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={css.section}>
                    <h4>Vehicle type</h4>
                    <div className={css.options}>
                        {['Van', 'Fully Integrated', 'Alcove'].map((type) => (
                            <button
                                key={type}
                                className={`${css.button} ${vehicleType === type ? css.active : ''}`}
                                onClick={() => setVehicleType(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <button className={css.searchButton} onClick={handleSearch}>
                Search
            </button>
        </aside>
    );
};

export default FilterPanel;
