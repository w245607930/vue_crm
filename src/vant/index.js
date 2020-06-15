
/**
 * Created by intellif on 2020/3/07.
 */
// 导入自己需要的组件
import {
  Button,
  Icon,
  Tag,
  Tab,
  Tabs,
  NavBar,
  Swipe,
  SwipeItem,
  Lazyload,
  Divider,
  Search,
  Dialog,
  Field,
  Popup,
  Picker,
  Radio,
  RadioGroup,
  Toast
} from 'vant';

const vant = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Icon)
    Vue.use(Tag)
    Vue.use(Tab)
    Vue.use(Tabs)
    Vue.use(NavBar)
    Vue.use(Swipe)
    Vue.use(SwipeItem)
    Vue.use(Lazyload)
    Vue.use(Divider)
    Vue.use(Search)
    Vue.use(Dialog)
    Vue.use(Field)
    Vue.use(Popup)
    Vue.use(Picker)
    Vue.use(Radio)
    Vue.use(RadioGroup)
    Vue.use(Toast)
  }
}
export default vant
