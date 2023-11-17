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
}