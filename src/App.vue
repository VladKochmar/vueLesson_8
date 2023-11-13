<template>
  <div class="main-block">
    <div class="main-block__container">
      <h1 class="main-title">Урок №8</h1>
      <section class="block">
        <h2 class="title">Завдання №1</h2>
        <div class="block__body">
          <shop-manager />
        </div>
      </section>
      <section class="block">
        <h2 class="title">Завдання №2</h2>
        <div class="block__body">
          <car-seller-manager />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ShopManager from './components/task1/ShopManager.vue'
import CarSellerManager from './components/task2/CarSellerManager.vue'

export default {
  name: 'App',
  components: { ShopManager, CarSellerManager },
}
</script>

<style lang="scss">
@import '@/assets/styles/index';
</style>
