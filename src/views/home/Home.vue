<template>
  <div class="home">
    <TopBar />
    <div class="home-item bdc">
      <span class="title">不动产业务</span>
      <span class="text"><i class="count-icon">{{bdcCount}}</i>条待审批</span>
    </div>
    <div class="home-item zhsw">
      <span class="title">综合事务</span>
      <span class="text"><i class="count-icon">{{zhswCount}}</i>条待审批</span>
    </div>
    <div class="home-item qclc">
      <span class="title">起草流程</span>
      <span class="text"><i class="add-icon"></i>条待审批</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';
import TopBar from '@/components/TopBar';
export default {
  name: 'home',
  components: {
    TopBar
  },
  data() {
    return {
      bdcCount: 0,
      zhswCount: 0
    };
  },
  mounted() {
    this.getCount();
  },
  methods: {
    async getCount () {
      const [bdcCont, zhswCount] = await Promise.all([
        axios.get('/service/fnmobile/bdcwaittask/getCount'),
        axios.get('/service/fnmobile/oawaittask/getCount')
      ]);
      console.log(bdcCont, zhswCount);
    }
  }
};

</script>

<style lang="stylus" scoped>
  .home
    padding: 1.48rem .4rem .9rem
    .home-item
      width: 100%
      height: 1.36rem
      line-height: 1.36rem
      display: flex
      justify-content: space-between
      box-sizing: border-box
      padding: 0 .32rem
      margin: .3rem 0
      position: relative
      box-shadow: 0 0 .04rem 0 rgba(255,155,155,0.50)
      border-radius: .1rem
      color: #fff
      &.bdc
        background-image: linear-gradient(-269deg, #FF8A9B 0%, #FEACA1 100%)
      &.zhsw
        background-image: linear-gradient(-269deg, #0CC1EB 0%, #16ECB1 100%)
      &.qclc
        background-image: linear-gradient(-270deg, #9095FE 0%, #ED98F2 100%)
      .title 
        width: 1.6rem
      .text
        flex: 1
        text-align: right
        .count-icon
          position: absolute
          right: 1.44rem
          top: 50%
          transform: translate(0, -50%)
          font-style: normal
          border-radius: 0.26rem
          font-size: 16px
          height: .42rem
          line-height: .42rem
          padding: 0 0.12rem
          margin-right: .16rem
          text-align: center
          border: 1px solid #fff
          white-space: nowrap
          background-color: #fff
          color: #FE8F97
          
</style>

