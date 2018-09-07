import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LoginPage from './routes/login';
import { getNavData } from './common/nav';
import cloneDeep from 'lodash/cloneDeep';
import { getPlainNode } from './utils/utils';
// dynamic.setDefaultLoadingComponent(() => (
//   <div className='loding-wapper'>
//     <Spin size="large"/>
//   </div>
// ))

function getRouteData(navData, path) {
  if (!navData.some(item => item.layout === path) ||
    !(navData.filter(item => item.layout === path)[0].children)) {
    return null;
  }
  const route = cloneDeep(navData.filter(item => item.layout === path)[0]);
  const nodeList = getPlainNode(route.children);
  return nodeList;
}

function getLayout(navData, path) {
  if (!navData.some(item => item.layout === path) ||
    !(navData.filter(item => item.layout === path)[0].children)) {
    return null;
  }
  const route = navData.filter(item => item.layout === path)[0];
  return {
    component: route.component,
    layout: route.layout,
    name: route.name,
    path: route.path,
  };
}

function RouterConfig({ history, app }) {
  const navData = getNavData(app);
  //const WorkplaceLayout = getLayout(navData, 'WorkplaceLayout').component;
  console.log(getLayout(navData, 'BlankLayout'))
  const BlankLayout = getLayout(navData, 'BlankLayout').component;
  const passProps = {
    app,
    navData,
    getRouteData: (path) => {
      return getRouteData(navData, path);
    },
  };
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage}/>
        <Route path="/" render={props => <BlankLayout {...props} {...passProps} />} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
