<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { filter } from 'lodash-es';
  import LineChart from '@/components/LineChart.vue';
  import { getCoinList } from '@/apis/base';
  import type { CoinListItem } from '@/apis/type.d';

  const coin = ref('bitcoin');
  const coinList = ref<CoinListItem[]>([]);
  const coinOptions = ref<CoinListItem[]>([]);

  onMounted(async () => {
    coinList.value = await getCoinList();
  });

  const filterCoins = (val: string, update: (_fn: () => void) => void) => {
    if (val === '') {
      update(() => {
        coinOptions.value = coinList.value;
      });
      return;
    }

    update(() => {
      coinOptions.value = filter(coinList.value, (opt: CoinListItem) =>
        opt.name.toLowerCase().includes(val.toLowerCase()),
      );
    });
  };
</script>

<template>
  <div class="p-6">
    <div class="my-6 flex justify-between">
      <q-select
        v-model="coin"
        input-debounce="0"
        label="Select a coin"
        :options="coinOptions"
        option-value="id"
        option-label="name"
        behavior="menu"
        emit-value
        filled
        use-input
        @filter="filterCoins"
      >
        <template #no-option>
          <q-item>
            <q-item-section class="text-grey"> No results </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
    <LineChart :coin-type="coin" />
  </div>
</template>
