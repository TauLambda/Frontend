// Importaciones necesarias
import { API_BASE_URL } from "../config";
import axios from "axios";

// Función para leer historial por ID de usuario
export async function readHistoryByUserId(id) {
    let history = [];

    try {
        // Realizar la solicitud GET para obtener el historial
        const response = await axios.get(`${API_BASE_URL}/history/readHistoryByUserId/${id}`);

        // Asignar el historial obtenido a la variable local
        history = response.data;

        // Imprimir el historial en formato JSON en la consola
        console.log(`Historial historyService.js: ${JSON.stringify(history, null, 2)}`);
    } catch (error) {
        // Manejar errores de la solicitud
        console.log(`Error readHistoryByUserId: ${error.message}`);
    }

    // Devolver el array de historial
    return history;
}

// Función para crear un registro en el historial
export async function createHistory(id, data) {
    try {
        // Realizar la solicitud POST para crear un registro en el historial
        const response = await axios.post(`${API_BASE_URL}/history/createHistory/${id}`, data);

        // Imprimir la respuesta del servidor en la consola
        console.log(`Historial createHistory: ${response.data}`);
    } catch (error) {
        // Manejar errores de la solicitud
        console.log(`Error createHistory: ${error.message}`);
    }
}
