import axios from "axios";
import { API_BASE_URL } from "../config"; // Replace with your actual API base URL

export async function readUserByEmail(email, password) {
    try {
        const data = JSON.stringify({ 
            Correo: email,
            Contrasena: password
        });
        customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        };

        const response = await axios.post(`${API_BASE_URL}/user/loginUser`, data,customConfig);

        //console.log(response);

        const user = response.data;
        //console.log(user)
        //console.log(`User: ${JSON.stringify(user, null, 2)}`);
        return user;
        
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
