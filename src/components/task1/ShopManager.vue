<template>
  <selector-panel />
  <products-catalog />
</template>

<script>
import ProductsCatalog from './ProductsCatalog.vue'
import SelectorPanel from './SelectorPanel.vue'

export default {
  name: 'ShopManager',
  components: { SelectorPanel, ProductsCatalog },
}
</script>

<style lang="scss" scoped></style>
