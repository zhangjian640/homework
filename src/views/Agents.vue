<template>
  <div class="agents">
    <div class="main">
      <list-item />
    </div>
    <div class="aside">
      <div>Summary</div>
      <div>History</div>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/list-item'
export default {
  name: 'Agents',
  components: {
    ListItem
  }
}
</script>
<style lang="scss" scoped>
  .agents{
    position: relative;
    .main{
      position: absolute;
      left: 0;
      right: 320px;
    }
    .aside{
      position: absolute;
      width: 300px;
      right: 0;
    }
  }
</style>
