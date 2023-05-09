import axios from "axios";

//baseURL need to be configure before starting

export default axios.create({
    baseURL: 'https://b4bf-2001-8a0-e4aa-d000-310e-6fa0-4430-f2d7.ngrok-free.app', 
    headers: {"ngrok-skip-browser-warning": "true",
            "Access-Control-Allow-Origin": "*"}
})