import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  params: {
    language: 'en',
    api_key: process.env.NEXT_PUBLIC_APP_TMDB_KEY,
  },
});

const authHeader = {
  setAuthToken(token: string) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  deleteAuthToken() {
    api.defaults.headers.common.Authorization = '';
  },
};

export { api, authHeader };
