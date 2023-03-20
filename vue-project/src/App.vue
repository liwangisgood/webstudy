<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { mapState, mapGetters } from 'vuex'/* 局部组件 */

export default {
  name: 'App',
  components: {
    HelloWorld, TheWelcome
  },
  data() {
    return {
      msg: '',
      charset: 'utf-8',
      encode: 'json',
      text: '很美的女子',
      // counter:''/* 不必重复定义 vuex中数据自动加入data中 */
    }
  },
  computed: {
    // 使用数组语法
    // ...mapState(['counter'])
    ...mapState(['counter']),

    // 使用对象语法：
    //   ...mapState({
    //   counter: state => state.counter
    // })

    ...mapGetters(['getCounter'])

  },
  mounted() {

    var that = this;

    // this.$api.getChengpin().then(res => {
    //   console.log(this);
    //   console.log(res.data);
    // }),

    /* 跨域问题 */
    // this.$axios
    // .get('/api/FingerUnion/list.php')
    // .then(res=>{
    //   console.log('2:'+res.data);
    // })

    // this.$axios
    //   .post(`https://api.btstu.cn/tst/api.php`, this.$qs.stringify({
    //     text: this.text
    //   }))
    //   .then((res) => {
    //     console.log(this);/* ()=>{}代码中 vue */
    //     console.log(res);
    //     console.log(res.data);
    //   })
    // .then(function (res) {
    //   console.log( this);/* function代码中 undefined */
    //   console.log( res);
    //   console.log(res.data);
    // }),

    this.$axios({
      method: 'get',
      url: `http://api.btstu.cn/yan/api.php?charset=${this.charset}&encode=${this.encode}`,
    }).then(res => {
      console.log(this);
      console.log(res);
      console.log(res.data);
      console.log(res.data.text);
      this.msg = res.data.text
    })
    // this.$axios
    //   .get(`http://api.btstu.cn/yan/api.php?charset=${this.charset}&encode=${this.encode}`)
    //   .then((res)=>{
    //     console.log(this);/* vue */
    //     this.msg=res.data.text
    //     console.log(res);
    //   })
    // .then(function (res) {
    //   console.log(this);/* undefined */
    //   that.msg = res.data.text/* 使用箭头函数可以直接用this */
    //   console.log(res);
    // })
  }

}
</script>

<template>
  <!-- vuex组件状态管理 -->
  <!-- 1、第一种读取方式 麻烦 -->
  <!-- <p>counter:{{ $store.state.counter }}</p> -->
  <!-- 2、 -->
  <p>counter:{{ counter }}</p>
  <!-- <p>counter:{{ $store.getters.getCounter }}</p> -->
  <p>counter:{{ getCounter }}</p>


  <!-- 路由学习 -->
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link to="/">Home </router-link>
      <router-link to="/about">About </router-link>
      <router-link to="/school">School </router-link>
      <router-link to="/news">News</router-link>

    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <ul>
      <li><router-view></router-view></li>


    </ul>

  </div>

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
