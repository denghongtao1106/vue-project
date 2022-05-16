import alert from "./alert/index.js";
import icon from "./icon";

const install = function (Vue) {
  //注册全局组件
  Vue.component(icon.name, icon);
  //添加全局API
  Vue.prototype.$alert = alert;
};
export default install;
