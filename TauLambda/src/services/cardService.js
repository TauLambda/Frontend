// Importaciones necesarias
import { API_BASE_URL } from "../config";
import axios from "axios";

// Función para leer tarjetas por ID de usuario
export async function readCardsByUserId(id) {
    let cards = [];

    try {
        // Realizar la solicitud GET para obtener las tarjetas
        const response = await axios.get(`${API_BASE_URL}/card/readCardsByUserId/${id}`);

        // Asignar las tarjetas obtenidas a la variable local
        cards = response.data;

        // Imprimir las tarjetas en formato JSON en la consola
        console.log(`Tarjetas readCardsByUserId: ${JSON.stringify(cards, null, 2)}`);
    } catch (error) {
        // Manejar errores de la solicitud
        console.log(`Error readCardsByUserId: ${error.message}`);
    }

    // Devolver el array de tarjetas
    return cards;
}

// Función para crear una tarjeta para un usuario
export async function createCard(id, data) {
    try {
        // Realizar la solicitud POST para crear una tarjeta
        const response = await axios.post(`${API_BASE_URL}/card/createCard/${id}`, data);

        // Imprimir la respuesta del servidor en la consola
        console.log(`Tarjetas createCard: ${response.data}`);
    } catch (error) {
        // Manejar errores de la solicitud
        console.log(`Error createCard: ${error.message}`);
    }
}
