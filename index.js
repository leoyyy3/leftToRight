import leftToRight from './src/main';

/* istanbul ignore next */
leftToRight.install = function(Vue) {
  Vue.component(leftToRight.name, leftToRight);
};

export default leftToRight;
