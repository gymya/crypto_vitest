import 'axios';

// 擴展 axios 的 AxiosRequestConfig 介面
declare module 'axios' {
  interface AxiosRequestConfig {
    loading?: boolean;
  }
}
