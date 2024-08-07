import { ApiResponse } from '@/types/data';
import { api } from './axiosConfig';

/**
 * Fetches data from the specified URL using Axios.
 *
 * @param {string} url - The URL endpoint for the API request.
 * @param {Object} params - Optional parameters to be included in the API request.
 */
export const fetchData = async ({
  url,
  params,
}: {
  url: string;
  params?: Record<string, any>;
}) => {
  try {
    const response = await api.get(url, { params });
    return response.data as ApiResponse;
  } catch (err: any) {
    const message = err?.response?.data
      ? err.response.data.status_message
      : err.message;
    console.error('error', message);
  }
};

/**
 * Fetches data from the specified URL using Axios.
 *
 * @param {string} url - The URL endpoint for the API request.
 */
export const fetchDetails = async ({ url }: { url: string }) => {
  try {
    const response = await api.get(url);
    return response.data as any;
  } catch (err: any) {
    const message = err?.response?.data
      ? err.response.data.status_message
      : err.message;
    console.error('error', message);
  }
};

/**
 * Fetches data from the specified URL using Axios.
 *
 * @param {string} url - The URL endpoint for the API request.
 */
export const fetchCast = async ({ url }: { url: string }) => {
  try {
    const response = await api.get(url);
    return response.data as any;
  } catch (err: any) {
    const message = err?.response?.data
      ? err.response.data.status_message
      : err.message;
    console.error('error', message);
  }
};
