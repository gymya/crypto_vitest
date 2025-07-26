import { map } from 'lodash-es';

export type FormattedData = { label: string; value: number };

export const formatData = (data: readonly [number, number][]): FormattedData[] =>
  map(data, (price: [number, number]) => {
    const date = new Date(price[0]);
    const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    return {
      label: formattedDate,
      value: price[1],
    };
  });
