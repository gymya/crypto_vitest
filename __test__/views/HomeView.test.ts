import { mount } from '@vue/test-utils';
import { it, describe, expect, vi } from 'vitest';
import { Quasar } from 'quasar';
import HomeView from '@/views/HomeView.vue';

// Mock the API calls
vi.mock('@/apis/base', () => ({
  getCoinList: vi.fn(() =>
    Promise.resolve([
      { id: 'bitcoin', name: 'Bitcoin' },
      { id: 'ethereum', name: 'Ethereum' },
    ]),
  ),
}));

// Mock the LineChart component to avoid Chart.js issues in tests
vi.mock('@/components/LineChart.vue', () => ({
  default: {
    name: 'LineChart',
    props: ['coinType'],
    template: '<div data-testid="line-chart">Mock LineChart</div>',
  },
}));

describe('HomeView.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [Quasar],
        stubs: {
          QSelect: {
            template: '<div data-testid="q-select"><slot /></div>',
            props: ['modelValue', 'options', 'label'],
          },
          QItem: {
            template: '<div data-testid="q-item"><slot /></div>',
          },
          QItemSection: {
            template: '<div data-testid="q-item-section"><slot /></div>',
          },
        },
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('[data-testid="line-chart"]').exists()).toBe(true);
  });
});
