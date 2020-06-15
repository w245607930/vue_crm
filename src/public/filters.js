/**
 * Created by intellif on 2020/6/11.
 */
const myFilters = {
  // formatAmount: function(cellValue, digits) {
  //   if (cellValue && cellValue != 0) {
  //     return XEUtils.commafy(cellValue, {digits: digits || 2})
  //   } else if (cellValue && cellValue == 0) {
  //     return '-'
  //   } else {
  //     return '-'
  //   }
  // },
  formatPercent: function(val){
    if (val && val != 0) {
      return (val * 100).toFixed(2) + '%'
    } else if (val && val == 0) {
      return '-'
    } else {
      return '-'
    }
  }
}

export default myFilters;
