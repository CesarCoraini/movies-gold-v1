import axios from "axios";

export default axios.create({
    baseURL: 'https://c08b-2001-8a0-e4aa-d000-8b6c-a370-5d42-c82.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true",
            "Access-Control-Allow-Origin": "*"}
})