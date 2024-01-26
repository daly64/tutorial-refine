import { DataProvider } from "@refinedev/core";
import axios from "axios";

const API_URL = "https://api.fake-rest.refine.dev";
export const dataProvider: DataProvider = {
  getList: ({ resource }) => {
    return axios
    .get(`${API_URL}/${resource}`)
    .then((response) => ({
      data: response.data,
      total: response.data.length,
    }));
  },
  getOne: ({ id, resource }) => {
    return axios
      .get(`${API_URL}/${resource}/${id}`)
      .then((response) => ({ data: response.data }));
  },
  create: ({ resource, meta }) => {
    return axios
      .post(`${API_URL}/${resource}`, meta)
      .then((response) => ({ data: response.data }));
  },
  update: ({ id, resource, meta }) => {
    return axios
      .put(`${API_URL}/${resource}/${id}`, meta)
      .then((response) => ({ data: response.data }));
  },
  deleteOne: ({ id, resource }) => {
    return axios
      .delete(`${API_URL}/${resource}/${id}`)
      .then((response) => ({ data: response.data }));
  },
  getApiUrl: () => API_URL,
};
