/**
 * Created by intellif on 2020/6/12.
 */
import fetch from '@/fetch.js'
import urls from '../urls'

export const getList = async () =>
  fetch({
    url: 'https://api.map.baidu.com/location/ip',
    method: 'GET',
    params: {
        ak: 'sWwWxGBVnrhoqaEa8VuBOBexVSNSZ1GG',
        ip: '163.125.249.233',
        coor: 'bd09ll'
    },
  })

export function getToken() {
  return fetch({
    url: urls.getToken,
    method: 'GET',
    params: {
    },
    headers: {
      'content-type': 'application/json',
    }
  })
}
