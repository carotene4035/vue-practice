/** コンポーネントの定義 */
var mycomponent = {
  template: '<div>hello {{message}}<button v-on:click="count++">You clicked me {{ count }} times.</button></div>',
  data: function() {
    return {
      message: 'taichi',
      count: 0
    }
  }
};

/** コンポーネントの登録 */
Vue.component('my-component', mycomponent);


/** 今後生成されるすべてのvueインスタンスで使えるようになる */
var app = new Vue({
  el: '#app'
});
