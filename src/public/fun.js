/**
 * Created by intellif on 2020/6/11.
 */
exports.install = function (Vue, options) {
  Vue.prototype.$fixedAndRound = function(num) { //全局函数 保留两位数
    var str = String(num);
    var index = str.indexOf('.');
    if (index == -1) {
      var data = str + '.00';
      return data;
    } else {
      var left_one = str.charAt(index + 1);
      var left_two = str.charAt(index + 2);
      var left_three = str.charAt(index + 3);
      if (left_one == '') { // str=>52.
        return str + '.00'; // return=>52.00
      } else if (left_two == '') { // str=>52.2
        return str + '0'; // return=>52.20
      } else if (left_three == '') { // str=>52.22
        return str; // return=>52.22
      } else { // str=>52.456
        if (parseInt(left_three) >= 5) { // str=>52.456
          left_two = parseInt(left_two) + 1;
          if (parseInt(left_two) == 10) { // str=>52.496
            left_one = parseInt(left_one) + 1;
            left_two = 0;
            return str.substring(0, index + 1) + left_one + left_two; // return=>52.50
          } else { // str=>52.486
            return str.substring(0, index + 1) + left_one + left_two; // return=>52.49
          }
        } else { // str=>52.494
          return str.substring(0, index + 3); // str=>52.49
        }
      }
    }
  };

  Vue.prototype.$filterXSS = function(str) { //全局XSS转义
    return str
      .replace(/&/g, '&amp;')
      .replace(/ /g, '&nbsp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/\r{0,}\n/g, '<br/>')
  };

  /**
   *
   * @type {{add: add, minus: minus, division: division, times: times}}
   *  策略模式 和 状态模式
   *  作用：优化if...else
   *
   */
  Vue.prototype.$calculator = function(type, a ,b) {
    const strategy = {
      add: function(a, b) {
        return a + b;
      },
      minus: function(a, b) {
        return a - b;
      },
      division: function(a, b) {
        return a / b;
      },
      times: function(a, b) {
        return a * b;
      }
    }
    return strategy[type](a, b);
  };

}
