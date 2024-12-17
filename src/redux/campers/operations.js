import axios from "axios";

const API_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchCampers = async (filters = {}) => {
    const data = await axios.get(API_URL, {params: filters });
    console.log(data)

    return data;
};

export const fetchCamperDetails = async (id) => {
    const data = await axios.get(`${API_URL}/${id}`);
    return data;
};
