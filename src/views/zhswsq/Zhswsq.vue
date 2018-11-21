<template>
  <div>
    <TopBar title="发起流程" />
    <div class="zhswsp-view">
      <router-link :to="{name: item.url}" v-for="(item, index) of ywlc" :key="index">
        <div class="zhsw-item" >
          <i class="zhsw-item-icon"></i>
          <span class="zhsw-item-title">{{item.name}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import TopBar from '@/common/TopBar';
export default {
  name: 'zhswsq',
  components: {
    TopBar
  },
  data() {
    return {
      ywlc: [
        { name: '业务类交办', url: 'ywljb' },
        { name: '综合类交办', url: 'zhljb' },
        { name: '外出报备', url: 'wcbb'},
        { name: '请假申请', url: 'qjsq' }
        ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.zhswsp-view {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 1.12rem 0.24rem;

  .zhsw-item {
    width: 100%;
    height: 1.04rem;
    position: relative;
    margin: 0.24rem 0;
    box-sizing: border-box;
    padding-left: 0.54rem;
    line-height: 1.04rem;
    border-radius: 0.2rem;
    font-size: 0.32rem;
    background-color: #fff;

    &-icon {
      width: 0.1rem;
      height: 0.1rem;
      border-radius: 50%;
      background-color: #34EBBE;
      position: absolute;
      left: 0.24rem;
      top: 50%;
      -webkit-transform: translate(0, -50%);
      transform: translate(0, -50%);
    }
  }
}
</style>


