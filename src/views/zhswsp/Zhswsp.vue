<template>
  <div>
    <top-bar title="综合事务审批"></top-bar>
    <div class="zhswsp-view">
      <div class="zhswsp-item" v-for="(item, index) of zhsw" :key="index">

      </div>
    </div>
  </div>
</template>
<script>
import TopBar from '@/common/TopBar.vue'
export default {
  name: 'zhswsp',
  components: {
    TopBar
  }
}
</script>
<style lang="stylus" scoped>

</style>

