import axios from "axios";
const IMAGE_API = axios.create({ baseURL: "https://api.unsplash.com" });

export const fetchImages = (url) => IMAGE_API.get(url)