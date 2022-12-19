import Button from "./Button/index.vue";
import Select from "./Select/index.vue";

// 按需引入
export { Button ,Select};

// 全局引入
const components = [Button,Select];
const install = (app) => {
  components.forEach((element) => {
    console.log(element);
    app.component(element.name, element);
  });
  return app;
};
export default {
  install,
};
