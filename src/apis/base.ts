import type { AxiosRequestConfig } from 'axios';
import API from '@/apis/axios';
import {
  type CoinListItem,
  type CoinMarketChartParams,
  type CoinMarketChartResponse,
} from '@/apis/type.d';
import '@/types/axios.d';

export const getCoinList = (config?: AxiosRequestConfig): Promise<CoinListItem[]> =>
  API.get('/coins/list', config);

export const getMarketChart = (
  params: CoinMarketChartParams,
  config?: AxiosRequestConfig,
): Promise<CoinMarketChartResponse> =>
  API.get(`/coins/${params.id}/market_chart`, {
    params: {
      vs_currency: params.vs_currency,
      days: params.days,
      ...(params.interval && { interval: params.interval }),
      ...(params.precision && { precision: params.precision }),
    },
    ...config,
  });
