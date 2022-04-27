import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    "process.env.NEAR_ENV": process.env.NEAR_ENV
  },
  nodeModulesTransform: {
    type: 'none',
  },
  locale: {
    default: 'en-US',
    baseNavigator: true,
    antd: true
  },
  // routes: [
  //   { path: '/swap', component: '@/pages/swap'},
  //   { path: '/', component: '@/pages/index',},
  // ],
  fastRefresh: {},
});
