import axios from "axios";

export const API_URL: string = "https://localhost:44328/api/";

export const api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
});
