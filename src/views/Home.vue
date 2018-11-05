<template>
  <div class="home">
    <TopBar />
    <div class="home-item bdc">
      <span class="title">不动产业务</span>
      <span class="text"><i class="count-icon"></i>条待审批</span>
    </div>
    <div class="home-item zhsw">
      <span class="title">综合事务</span>
      <span class="text"><i class="count-icon"></i>条待审批</span>
    </div>
    <div class="home-item qclc">
      <span class="title">起草流程</span>
      <span class="text"><i class="count-icon"></i>条待审批</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TopBar from '@/components/TopBar';
export default {
  name: 'home',
  components: {
    TopBar
  }
}
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
</style>

