import axios from "axios";

const API_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';


export const fetchCampers = async (filters = {}) => {
    const url = new URL(API_URL);

    // Добавляем фильтры в URL
    Object.entries(filters).forEach(([key, value]) => {
        if (value) url.searchParams.append(key, value);
    });

    try {
        const { data } = await axios.get(url.toString());
        return data; // Возвращаем данные
    } catch (error) {
        console.error('Error fetching campers:', error);
        throw error;
    }
};



// Получить детали конкретного кемпера по ID
export const fetchCamperDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data; // Возвращаем данные из ответа
    } catch (error) {
        console.error("Error fetching camper details:", error.message);
        throw new Error("Failed to fetch camper details");
    }
};

