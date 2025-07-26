import { mount } from '@vue/test-utils';
import { it, describe, expect } from 'vitest';
import LineChart from '@/components/LineChart.vue';

describe('LineChart.vue', () => {
  it('renders correctly with props', () => {
    const wrapper = mount(LineChart, {
      props: {
        coinType: 'bitcoin',
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
