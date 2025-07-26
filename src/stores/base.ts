import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useQuasar } from 'quasar';

export const useBaseStore = defineStore('base', () => {
  const $q = useQuasar();

  const loading = ref(false);

  const setLoading = (value: boolean) => {
    loading.value = value;
    if (value) $q.loading.show();
    else $q.loading.hide();
  };

  return {
    loading,
    setLoading,
  };
});
