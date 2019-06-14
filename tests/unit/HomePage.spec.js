import { shallowMount } from '@vue/test-utils';
import HomePage from '@/components/HomePage.vue';

describe('HomePage.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Get started';
    const wrapper = shallowMount(HomePage, {
      propsData: { msg },
    });
    expect(wrapper.text()).toContain(msg);
  });
});
