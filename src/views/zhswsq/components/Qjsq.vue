<template>
  <div>
    <top-bar title="请假申请"></top-bar>
    <div class="qjsq-view">
      <div class="qjsq-content">
        <div class="qjsq-view-item">
          <span class="name">标题</span>
          <input type="text">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopBar from '@/common/TopBar';
export default {
  name: 'qjsq',
  components: {
    TopBar
  }
}
</script>
<style lang="stylus" scoped>
  .qjsq-view
    width 100%
    height 100%
    box-sizing border-box
    padding 1.12rem .24rem
    .qjsq-content
      box-sizing border-box
      padding 0 .24rem
      margin: .3rem 0 .24rem 0
      border-radius .2rem;
      background-color #fff
      line-height .86rem
      .qjsq-view-item
        display -webkit-flex
        display flex
        .name
          flex 0 0 1.5rem
        .text
          flex 1
</style>


