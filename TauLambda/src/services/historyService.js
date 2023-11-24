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
};

export async function createHistory(id, data) {
    try {
        const response = await axios.post(`${API_BASE_URL}/history/createHistory/${id}`, data)
        console.log(`Historial createHistory: ${response.data}`)
    } catch (error) {
        console.log(`Error createHistory: ${error.message}`)
    }
};