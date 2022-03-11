const app = new Vue({
    el: '#root',
    data: {
      hello: 'Hello with Vue.js!',
      vueImg: 'https://picsum.photos/200/200',
    },
    methods: {
      hi: function() {
        return this.hello = 'ciao'
      }
    }
  })