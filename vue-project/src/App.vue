<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'


export default {
  name: 'App',
  // components: {
  //   Swiper, SwiperSlide, axios, querystringify
  // },
  data() {
    return {
      msg: '',
      charset: 'utf-8',
      encode: 'json',
      text: '很美的女子'
    };
  },
  mounted() {

    var that = this;

    this.$api.getChengpin().then(res => {
      console.log('1:'+res.data);
    }),

    /* 跨域问题 */
    // this.$axios
    // .get('/api/FingerUnion/list.php')
    // .then(res=>{
    //   console.log('2:'+res.data);
    // })

    this.$axios
      .post(`https://api.btstu.cn/tst/api.php`, this.$qs.stringify({
        text: this.text
      }))
      .then(function (res) {
        console.log('post this:' + this);/* undefined */
        console.log(res);
        console.log(res.data);
      }),

      // axios({
      //   method: 'get',
      //   url: `http://api.btstu.cn/yan/api.php?charset=${this.charset}&encode=${this.encode}`,
      // }).then(res => {
      //   console.log(res);
      //   console.log(res.data);
      //   console.log(res.data.text);
      //   this.msg = res.data.text
      // })
      this.$axios
        .get(`http://api.btstu.cn/yan/api.php?charset=${this.charset}&encode=${this.encode}`)
        .then(function (res) {
          console.log('get this:' + this);/* undefined */
          that.msg = res.data.text/* 使用箭头函数可以直接用this */
          console.log(res);
        })
  }

}
</script>

<template>
  <header>
    <input type="text" v-model='msg'>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
