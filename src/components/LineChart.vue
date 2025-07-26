<script setup lang="ts">
  import { ref, computed, watch } from 'vue';
  import { Line } from 'vue-chartjs';
  import {
    Chart as ChartJS,
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Title,
    type ChartData,
    type ChartOptions,
  } from 'chart.js';
  import { map, forEach } from 'lodash-es';
  import { getMarketChart } from '@/apis/base';
  import { type CoinMarketChartParams, type CoinMarketChartResponse } from '@/apis/type.d';
  import { formatData, type FormattedData } from '@/utils/formatDate';

  const props = defineProps<{
    coinType: string;
  }>();

  ChartJS.register(LineController, LineElement, PointElement, CategoryScale, LinearScale, Title);

  const rawChartData = ref<CoinMarketChartResponse | null>(null);

  const chartData = computed<ChartData<'line'>>(() => {
    const formattedData = formatData(rawChartData.value?.prices || []);
    return {
      labels: map(formattedData, (d: FormattedData) => d.label),
      datasets: [
        {
          label: 'My First Dataset',
          data: map(formattedData, (d: FormattedData) => d.value),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };
  });
  const chartOptions = ref<ChartOptions<'line'>>({
    responsive: true,
  });

  const coinMarketChartParams = ref<CoinMarketChartParams>({
    id: '',
    vs_currency: 'usd',
    days: 6,
    interval: 'daily',
  });
  const fetchChartData = async () => {
    try {
      const data: CoinMarketChartResponse = await getMarketChart(coinMarketChartParams.value);
      // remove current day data
      forEach(data, (d: [number, number]) => {
        d.pop();
      });
      rawChartData.value = data;
    } catch (error) {
      console.error('Error fetching market chart data:', error);
    }
  };

  watch(
    () => props.coinType,
    async (newCoinType) => {
      if (newCoinType) {
        coinMarketChartParams.value.id = newCoinType;
        await fetchChartData();
      }
    },
    { immediate: true },
  );
</script>

<template>
  <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
