import axios from "axios";

export default axios.create({
    baseURL: 'https://1123-2001-8a0-e4aa-d000-10a7-8421-ed40-27.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true",
            "Access-Control-Allow-Origin": "*"}
})