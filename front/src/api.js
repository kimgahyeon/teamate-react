import axios from "axios";

const SERVER_URL = "http://dmc.ajou.ac.kr";
const SERVER_PORT = "8080";

const api = axios.create({
  baseURL: `${SERVER_URL}:${SERVER_PORT}/`,
  withCredentials: true,
});

export const mateAPI = {
  getAllMates: () => api.get("mate"),
  getMateByID: (id) => api.get(`mate/${id}`),
  getMateByEmail: (email) => api.get(`mate/email/${email}`),
  updateMate: (id, mate) => api.put(`mate/${id}`, { mate }),
  deleteMate: (id) => api.delete(`mate/${id}`),

  login: ({ email, password }) => api.post("login", { email, password }),
  join: ({ email, password, name }) =>
    api.post(`mate`, { email, password, name }),
};

export const projectAPI = {
  setProject: (project) => api.post("project", { project }),
  getAllProjects: () => api.get("project/"),
  getProjectsByStatus: (status) => api.get(`project/status/${status}`),
  getProjectByID: (id) => api.get(`project/${id}`),
  updateProject: (id, project) => api.put(`project/${id}`, { project }),
  deleteProject: (id) => api.delete(`project/${id}`),
};

export default api;
