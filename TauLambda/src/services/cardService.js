import { API_BASE_URL } from "../config";
import axios from "axios";

export async function readCardsByUserId(id) {
    try {
        const response = await axios.get(`${API_BASE_URL}/card/readCardsByUserId/${id}`)
        cards = response.data
        console.log(`Tarjetas readCardsByUserId: ${JSON.stringify(cards, null, 2)}`)
    } catch (error) {
        console.log(`Error readCardsByUserId: ${error.message}`)
    }

    return cards;
};

export async function createCard(id, data) {
    try {
        const response = await axios.post(`${API_BASE_URL}/card/createCard/${id}`, data)
        console.log(`Tarjetas createCard: ${response.data}`)
    } catch (error) {
        console.log(`Error createCard: ${error.message}`)
    }
};