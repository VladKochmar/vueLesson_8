<template>
  <div class="container">
    <filter-panel />
    <cars-catalog />
  </div>
</template>

<script>
import CarsCatalog from './CarsCatalog.vue'
import FilterPanel from './FilterPanel.vue'

export default {
  name: 'CarSellerManager',
  components: { CarsCatalog, FilterPanel },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
</style>
