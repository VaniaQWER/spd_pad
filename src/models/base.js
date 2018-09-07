/* 
  全局公共 model
*/
import * as baseService from '../services/base';
import { routerRedux } from 'dva/router';
import { Toast } from 'antd-mobile';

export default {

  namespace: 'base',

  state: {

  },
  reducers: {
    
  },
  effects: {
    *getDetail({ payload, callback }, { call, put }) {
      const data = yield call(baseService.getPlanDetail, payload);
      if(data.code === '200'){
        if(callback) callback(data);
      }else{
        Toast.fail(`请求错误:  ${data.msg}`, 1);
        yield put(routerRedux.push('/login'));
      }
    }
      
  },

  
  subscriptions: {
    
  },

};
