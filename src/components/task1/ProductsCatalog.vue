<template>
  <div class="products-catalog">
    <div class="products-catalog__item" v-for="product in getFilteredProductsList" :key="product.id">
      <div class="product">
        <div class="product__img"><img :src="product.imgSrc" /></div>
        <div>
          <h3 class="product__title">{{ product.title }}</h3>
          <div v-if="product.discount" class="product__discount">{{ product.discount }}</div>
          <div class="product__price">{{ product.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProductsCatalog',

  computed: {
    ...mapGetters(['getFilteredProductsList']),
  },

  methods: {
    ...mapActions(['loadProductsList']),
  },

  created() {
    this.loadProductsList()
  },
}
</script>

<style lang="scss" scoped>
.products-catalog {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.625rem;
  gap: 1.25rem 0;
  // .products-catalog__item
  &__item {
    flex: 1 1 25%;
    padding: 0 0.625rem;
  }
}
.product {
  display: flex;
  gap: 0 0.625rem;
  overflow: hidden;
  border-radius: 0.3125rem;
  border: 2px solid #fff;
  // .product__img
  &__img {
    flex: 0 1 8.75rem;
    widows: 8.75rem;
    img {
      max-width: 100%;
    }
  }
  // .product__title
  &__title {
    &:not(:last-child) {
      margin-bottom: 0.625rem;
    }
  }
  // .product__discount
  &__discount {
    color: red;
    font-size: 1.375rem;
  }
  // .product__price
  &__price {
    font-size: 0.875rem;
  }
}
</style>
