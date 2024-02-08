import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getAllBudgets = async () => {
    try {
        return await axios.get(`${API_URL}/budget`);
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data;
    }
}

export const saveBudget = async (payload) => {
    try {
        return await axios.post(`${API_URL}/budget`, payload);
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data;
    }
}

export const deleteBudget = async (id) => {
    try {
        return await axios.delete(`${API_URL}/budget/${id}`);
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data;
    }
}