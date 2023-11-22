import { API_BASE_URL } from "../config";
import axios from "axios";

export async function readHistoryByUserId(id) {
    try {
        const response = await axios.get(`${API_BASE_URL}/history/readHistoryByUserId/${id}`)
        history = response.data
        console.log(`Historial historyService.js: ${JSON.stringify(history, null, 2)}`)
    } catch (error) {
        console.log(`Error readHistoryByUserId: ${error.message}`)
    }

    return history;
}