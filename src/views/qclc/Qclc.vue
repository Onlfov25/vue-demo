<template>
  <div>
    <TopBar />
    <div class="zhswsp-view">
      <div class="zhsw-item" v-for="(item, index) of lcyw" :key="index">
        <i class="zhsw-item-icon"></i>
        <span class="zhsw-item-title">{{item}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import TopBar from '@/common/TopBar';
export default {
  name: 'qclc',
  components: {
    TopBar
  },
  data() {
    return {
      lcyw: ['业务类交办', '综合类交办', '外出报备', '请假申请']
    }
  }
}
</script>
<style lang="stylus" scoped>
.zhswsp-view
  width: 100%
  height: 100%
  box-sizing: border-box
  padding: 1.12rem .24rem
  .zhsw-item
    width: 100%
    height: 1.04rem
    position: relative
    margin: .24rem 0
    box-sizing: border-box
    padding-left: .54rem
    line-height: 1.04rem
    border-radius: .2rem
    font-size: .32rem
    background-color: #fff
    &-icon
      width: 0.1rem
      height: 0.1rem
      border-radius: 50%
      background-color: #34EBBE
      position: absolute
      left: .24rem
      top: 50%
      -webkit-transform: translate(0, -50%)
      transform: translate(0, -50%)

</style>


