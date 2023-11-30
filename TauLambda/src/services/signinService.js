import axios from "axios";
import { API_BASE_URL } from "../config"; // Replace with your actual API base URL

export async function createUser(name, email, password, phone, userType) {
    try {
        const data = JSON.stringify({
            Nombre: name,
            Contrasena: password,
            Correo: email,
            Telefono: phone,
            TipoUsuario: userType,
            Cashback: 0
        });
        customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        };

        const response = await axios.post(`${API_BASE_URL}/user/createUser`, data,customConfig);
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
