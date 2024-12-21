import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCampers } from "../../redux/campers/slice";
import { fetchCampers } from "../../redux/campers/operations";
import CamperCard from "../CamperCard/CamperCard";
import FilterPanel from "../FilterPanel/FilterPanel";

import css from './GalleryCard.module.css';
import Loader from "../Loader/Loader";

const ITEMS_PER_PAGE = 4; // Количество карточек на странице

const GalleryCard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const campers = useSelector((state) => state.campers.campers);
    const [filters, setFilters] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadCampers = async () => {
            try {
                setIsLoading(true); 
                const data = await fetchCampers({ ...filters, page: currentPage, limit: ITEMS_PER_PAGE });
                dispatch(setCampers(data.items)); 
                setTotalPages(Math.ceil(data.total / ITEMS_PER_PAGE)); 
            } catch (error) {
                console.error("Failed to load campers:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadCampers();
    }, [filters, currentPage, dispatch]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        setCurrentPage(1); 
    };

    const handleShowDetails = (id) => {
        navigate(`/catalog/${id}`);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    if (isLoading) return <Loader />;

    return (
        <div className={css.pageContainer}>
            <FilterPanel onFilterChange={handleFilterChange} />
            <div className={css.container_gallery}>
                <ul>
                    {campers.map((camper) => (
                        <li key={camper.id} className="css.li_card">
                            <CamperCard
                                imageUrl={camper.gallery[0]?.original}
                                title={camper.name}
                                description={camper.description}
                                reviews={camper.reviews.length}
                                location={camper.location}
                                price={camper.price}
                                transmission={camper.transmission}
                                engine={camper.engine}
                                bathroom={camper.bathroom}
                                TV={camper.TV}
                                onShowMore={() => handleShowDetails(camper.id)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={css.pagination}>
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className={css.paginationButton}
                    >
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={css.paginationButton}
                    >
                        Next
                    </button>
                </div>
        </div>
    );
};

export default GalleryCard;
