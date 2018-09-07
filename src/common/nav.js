import dynamic from 'dva/dynamic';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}`)),
  component,
});



export const getNavData = app => [
  {
  component: dynamicWrapper(app, [], () => import('../layouts/BlankLayout')),
  layout: 'BlankLayout',
  path: '/',
  name: '首页',
  children: [
    {
      name: "验收",
      icon: 'acceptance',
      path: '/acceptance/list',
      component: dynamicWrapper(app, [], () => import('../routes/acceptance'))
    },
    {
      name: "验收详情",
      icon: 'acceptance',
      path: '/acceptance/detail',
      component: dynamicWrapper(app, [], () => import('../routes/acceptance/detail'))
    },
    {
      name: "上架",
      icon: 'grounding',
      path: '/grounding/list',
      component: dynamicWrapper(app, [], () => import('../routes/grounding'))
    },
    {
      name: "上架详情",
      icon: 'grounding',
      path: '/grounding/detail',
      component: dynamicWrapper(app, [], () => import('../routes/grounding/detail'))
    },
    {
      name: "拣货下架",
      icon: 'undercarriage',
      path: '/undercarriage/list',
      component: dynamicWrapper(app, [], () => import('../routes/undercarriage'))
    },
    {
      name: "拣货下架详情",
      icon: 'undercarriage',
      path: '/undercarriage/detail',
      component: dynamicWrapper(app, [], () => import('../routes/undercarriage/detail'))
    },
    {
      name: "盘点",
      icon: 'inventory',
      path: '/inventory/list',
      component: dynamicWrapper(app, [], () => import('../routes/inventory'))
    },
    {
      name: "盘点-药品信息",
      icon: 'inventory',
      path: '/inventory/listInfo',
      component: dynamicWrapper(app, [], () => import('../routes/inventory/list'))
    },
    {
      name: "盘点详情",
      icon: 'inventory',
      path: '/inventory/detail',
      component: dynamicWrapper(app, [], () => import('../routes/inventory/detail'))
    },
    {
      name: "库存查询",
      icon: 'stock',
      path: '/stock',
      component: dynamicWrapper(app, [], () => import('../routes/stock'))
    },
    {
      name: "库存详情",
      icon: 'stock',
      path: '/stock/detail',
      component: dynamicWrapper(app, [], () => import('../routes/stock/detail'))
    }
  ]
}]



