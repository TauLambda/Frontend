import axios from "axios";
import { API_BASE_URL } from "../config"; // Replace with your actual API base URL

export async function createCar(modelo, placa, ID_usuario) {
    try {
        const data = JSON.stringify({
            Placa: placa,
            Modelo: modelo,
            ID_usuario: ID_usuario
        });
        customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        };

        const response = await axios.post(`${API_BASE_URL}/car/createCar`, data,customConfig);
        console.log(response)
        
    } catch (error) {
        if (error.response) {
            console.log('Server responded with an error status:', error.response.status);
            console.log('Error details:', error.response.data);
        } else if (error.request) {
            console.log('No response received from the server');
        } else {
            console.log('Error setting up the request:', error.message);
        }
        throw error;
    }
}
