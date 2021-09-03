import axios from "axios";

const SERVER_URL = "localhost";
const SERVER_PORT = "8800";

const api = axios.create({
  baseURL: `${SERVER_URL}:${SERVER_PORT}/`,
});

export const mateAPI = {
  getAllMates: () => api.get("mate/"),
  getMateByID: (id) => api.get(`mate/${id}`),
}

export const projectAPI = {

}

export default api;