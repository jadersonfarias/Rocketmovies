import axios from "axios"

export const api = axios.create({
    baseURL: "https://rocketmovie-f2rc.onrender.com" //http://localhost:3333
});