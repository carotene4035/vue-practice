// コンポーネントの定義
var mycomponent = {
  template: '<div>hello</div>'
};

// コンポーネントの登録
Vue.component('my-component', mycomponent);

/** 今後生成されるすべてのvueインスタンスで使えるようになる */
var app = new Vue({
  el: '#app'
});
