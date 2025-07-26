export interface CoinGeckoErrorResponse {
  error: string;
}

export interface CoinListItem {
  id: string;
  symbol: string;
  name: string;
}

// ---Chart Data Types---

export interface CoinMarketChartParams {
  id: string;
  vs_currency: string;
  days: number;
  interval?: 'daily';
  precision?: 'full' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
}

export interface CoinMarketChartResponse {
  prices: readonly [number, number][];
  market_caps: readonly [number, number][];
  total_volumes: readonly [number, number][];
}
