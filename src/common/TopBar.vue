<template>
  <div class="top-bar-view">
    <i class="iconfont arrow" @click="routeback">&#xe600;</i>
     <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    title: {
      type: String,
      default: '阜宁不动产移动端'
    }
  },
  methods: {
    routeback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
  .top-bar-view
    width: 100%
    height: 1.12rem
    line-height: 1.12rem
    position: fixed
    left: 0
    top: 0
    text-align: center
    font-size: 20px
    background-image: linear-gradient(-225deg, #3B7BFF 0%, #29AEFF 100%)
    color: #fff
    .arrow
      width: .8rem
      height: .8rem
      line-height: .8rem
      position: absolute
      top: 50%
      left: .34rem
      transform: translate(0, -50%)
</style>


