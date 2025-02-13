import axios from "axios";
import { API_URL, BASE_URL } from "./config";
import { ENDPOINTS } from "./constants";

export const getCSRF = async () => {
  const response = await axios.get(ENDPOINTS.CSRF, {
    baseURL: BASE_URL,
    withCredentials: true,
  });

  return response?.data;
};

export const getData = async (endpoint: string, token: string | null = null) => {
  const config = token
    ? {
        baseURL: API_URL,
        withCredentials: true,
        withXSRFToken: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    : {
        baseURL: API_URL,
        withCredentials: true,
        withXSRFToken: true,
        headers: {
          "Content-Type": "application/json",
        },
      };

  const response = await axios.get(endpoint, config);
  return response.data;
};

export const postData = async (endpoint: string, payload: any, token: string | null = null) => {
  const config = token
    ? {
        baseURL: API_URL,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : {
        baseURL: API_URL,
        withCredentials: true,
      };
  const response = await axios.post(endpoint, payload, config);
  return response.data;
};

export const putData = async (endpoint: string, payload: any, token: string | null = null) => {
  const config = token
    ? {
        baseURL: API_URL,
        withCredentials: true,
        withXSRFToken: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : {
        baseURL: API_URL,
        withCredentials: true,
        withXSRFToken: true,
      };

  const response = await axios.put(endpoint, payload, config);
  return response.data;
};

export const deleteData = async (endpoint: string, token: string | null = null) => {
  const config = token
    ? {
        baseURL: API_URL,
        withCredentials: true,
        withXSRFToken: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    : {
        baseURL: API_URL,
        withCredentials: true,
        withXSRFToken: true,
        headers: {
          "Content-Type": "application/json",
        },
      };
  const response = await axios.delete(endpoint, config);
  return response.data;
};
