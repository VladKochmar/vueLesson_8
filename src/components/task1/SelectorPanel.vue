<template>
  <div class="selectors-container">
    <div
      class="selectors-container__item"
      v-for="selector in getSelectorsList"
      :key="selector.id"
      @click="setProductCategory(selector.title)"
    >
      <div class="selector">
        <img :src="selector.imgSrc" class="selector__img" />
        <h3>{{ selector.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SelectorPanel',

  computed: {
    ...mapGetters(['getSelectorsList']),
  },

  methods: {
    ...mapActions(['loadSelectorsList', 'setProductCategory']),
  },

  created() {
    this.loadSelectorsList()
  },
}
</script>

<style lang="scss" scoped>
.selectors-container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.625rem;
  &:not(:last-child) {
    margin-bottom: 1.25rem;
  }
  // .selectors-container__item
  &__item {
    flex: 1 1 25%;
    padding: 0.625rem;
  }
}
.selector {
  cursor: pointer;
  display: grid;
  gap: 1.25rem 0;
  justify-items: center;
  border: 2px solid #fff;
  border-radius: 0.3125rem;
  padding: 1.25rem 0.625rem;
  transition: background 0.3s ease 0s;
  min-width: 18.125rem;
  @media (any-hover: hover) {
    &:hover {
      background-color: rgb(110, 110, 110);
    }
  }
  // .selector__img
  &__img {
    max-width: 8rem;
    border-radius: 50%;
  }
}
</style>
