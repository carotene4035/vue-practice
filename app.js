/** 今後生成されるすべてのvueインスタンスで使えるようになる */
var app = new Vue({
  el: '#app',
  data: {
    a: 0,
    b: 0
  },
  computed: {
    sum: function() {
      return parseInt(this.a) + parseInt(this.b);
    },
    jou: function() {
      return this.a * this.a;
    }
  }
});