import { DataProvider } from "@refinedev/core";
import { axiosInstance } from "@refinedev/simple-rest";
// import axios from "axios";

const API_URL = "https://api.fake-rest.refine.dev";
export const dataProvider: DataProvider = {
  getList: async ({ resource }) => {
    const url = `${API_URL}/${resource}`;
    const { data } = await axiosInstance.get(url);
    return { data, total: data.length };
  },
  getOne: async ({ id, resource }) => {
    const url = `${API_URL}/${resource}/${id}`;
    const { data } = await axiosInstance.get(url);
    return { data };
  },
  create: async ({ resource, variables }) => {
    const url = `${API_URL}/${resource}`;
    const { data } = await axiosInstance.post(url, variables);
    return { data };
  },
  update: async ({ id, resource, variables }) => {
    const url = `${API_URL}/${resource}/${id}`;
    const { data } = await axiosInstance.patch(url, variables);

    return { data };
  },
  deleteOne: async ({ id, resource, variables }) => {
    const url = `${API_URL}/${resource}/${id}`;
    const { data } = await axiosInstance.delete(url, { data: variables });

    return { data };
  },
  getApiUrl: () => API_URL,
};
