<template>
  <div class="cars-container">
    <div class="car" v-for="car in getFilteredCarsList" :key="car.id">
      <div class="car__image-ibg"><img :src="car.imgSrc" /></div>
      <div class="car__body">
        <h3 class="car__title">{{ car.title }}</h3>
        <div class="car__price">{{ car.price }} $</div>
        <ul class="car__info">
          <li>{{ car.transportType }}</li>
          <li>{{ car.bodyType }}</li>
          <li>{{ car.model }}</li>
          <li>{{ car.year }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CarsCatalog',

  computed: {
    ...mapGetters(['getCarsList', 'getFilteredCarsList']),
  },

  methods: {
    ...mapActions(['loadCarsList']),
  },

  created() {
    this.loadCarsList()
  },
}
</script>

<style lang="scss" scoped>
.cars-container {
  display: grid;
  gap: 1.875rem 0;
}
.car {
  display: flex;
  gap: 0 1.25rem;
  // .car__image-ibg
  &__image-ibg {
    flex: 0 0 18.75rem;
    position: relative;
    padding-top: 40%;
    align-self: flex-start;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  // .car__body
  &__body {
    display: grid;
    align-content: start;
    gap: 1rem 0;
  }
  // .car__title
  &__title {
    font-size: 1.5rem;
  }
  // .car__price
  &__price {
    color: red;
  }
  // .car__info
  &__info {
    display: grid;
    gap: 1.25rem;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
