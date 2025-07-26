import axios, { type AxiosInstance, type AxiosError } from 'axios';
import { Notify } from 'quasar';
import { type CoinGeckoErrorResponse } from '@/apis/type.d';
import { useBaseStore } from '@/stores/base';
import '@/types/axios.d';

const API: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 20000,
  headers: {
    Accept: 'application/json',
  },
});

API.interceptors.request.use(
  (config) => {
    const { loading = true, headers } = config;

    if (loading) {
      const baseStore = useBaseStore();
      baseStore.setLoading(true);
    }
    headers.Authorization = `Bearer ${import.meta.env.VITE_API_KEY}`;
    return config;
  },
  (error) => Promise.reject(error),
);

const getErrorMessage = (error: AxiosError<CoinGeckoErrorResponse>): string => {
  if (error?.response?.data?.error) return error.response.data.error;

  const status = error.response?.status;
  switch (status) {
    case 400:
      return '發生錯誤，請稍後再試 (400)';
    case 500:
      return '伺服器錯誤，請稍後再試 (500)';
    case 502:
      return '網路錯誤，請稍後再試 (502)';
    case 504:
      return '伺服器超時，請稍後再試 (504)';
    default:
      console.error('error', error);
      return `網路發生錯誤，請稍後再試 (${status ?? 'Unknown'})`;
  }
};

API.interceptors.response.use(
  (response) => {
    const baseStore = useBaseStore();
    const { config: { loading = true } = {} } = response;

    if (loading) baseStore.setLoading(false);
    return response.data;
  },
  (error) => {
    console.log('API error:', error);

    if (axios.isAxiosError(error)) {
      const baseStore = useBaseStore();
      const { config: { loading = true } = {} } = error;
      if (loading) baseStore.setLoading(false);

      Notify.create({
        type: 'negative',
        message: getErrorMessage(error),
        icon: 'error',
      });
    } else {
      Notify.create({
        type: 'negative',
        message: '發生不可預期錯誤，請稍後再試',
        icon: 'error',
      });
    }
    return Promise.reject(error);
  },
);

export default API;
