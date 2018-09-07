
import promiseRequest from '../utils/promise_request'
import { _local } from '../api/local'

// 获取详情

export function getPlanDetail(options){
  return promiseRequest(`${_local}/getPlanDetail`,{ 
    method: 'GET',
    type: 'formData',
    body: options
  })
}
