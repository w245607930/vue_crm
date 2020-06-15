/**
 * Created by PC on 2019/9/25.
 */
//节流 单位时间内只执行一次
export const throttle = function (fn, gapTime) {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 500;
  }
  let _lastTime = null
  // 返回新的函数
  return function () {
    let _nowTime = +new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments)   //将this和参数传给原函数
      _lastTime = _nowTime
    }
  }
};

/*
 ”非立即执行防抖“ 指事件触发后，回调函数不会立即执行，会在延迟时间 n 秒后执行，如果 n 秒内被调用多次，则重新计时延迟时间
 */
export const debounce = function (func, delay) {
  var timeout;
  return function() {
    var context = this;
    var args = arguments;
    // && 短路运算 == if(timeout) else {...}
    timeout && clearTimeout(timeout);
    timeout = setTimeout(function(){
      func.apply(context, args);
    }, 800);
  }
};

/*
 *存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (process.browser) {
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
  }
};

/*
 *获取localStorage
 */
export const getStore = (name) => {
  if (!name) return;
  if (process.browser) {
    var value = window.localStorage.getItem(name);
    if (!value) return;
    return window.localStorage.getItem(name);
  }
};

/*
 *删除localStorage
 */
export const removeStore = (name) => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

//  清空localStorage缓存
export const clearLocalStorage = () => {
  window.localStorage.clear();
};

//  清空sessionStorage缓存
export const clearSessionStorage = () => {
  window.sessionStorage.clear();
};

/*
 * 检测tokenId的时效性 2小时失效
 * */
export const checkTokenId = function () {
  if (process.browser) {
    var settedTime = window.localStorage.getItem('tokenIdTime');
    if (!settedTime) {
      return false;
    }
    var nowTime = new Date().getTime();
    if (parseInt(settedTime) + 2 * 60 * 60 * 1000 < parseInt(nowTime)) {
      return false;
    }
    return true;
  }
};

// 设置cookies
export const setCookie = function (name, value, expires, path, domain, secure) {
  var liveDate = new Date();
  var exp = liveDate.setTime(liveDate.getTime() + expires * 24 * 60 * 60 * 1000);
  document.cookie = name + '=' + escape(value) +
    // ((expires) ? "; expires=" + exp : "") +
    ((expires) ? '; max-age=' + expires * 24 * 60 * 60 : '') +
    ((path) ? '; path=' + path : '') +
    ((domain) ? '; domain=' + domain : '') +
    ((secure) ? '; secure' : '');
};

// 读取cookies
export const getCookie = function (name) {
  var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');

  if (arr = document.cookie.match(reg)) {
    return unescape(arr[2]);
  } else {
    return null;
  }
};

// 删除cookies
export const delCookie = function (name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
  }
};

/*
 *根据字段key来对数组ary升序排列
 */
export const sortBykey = (ary, key) => {
  return ary.sort(function (a, b) {
    let x = a[key]
    let y = b[key]
    return ((x < y) ? -1 : (x > y) ? 1 : 0);
  })
}


