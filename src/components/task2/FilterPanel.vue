<template>
  <aside class="sidebar">
    <div class="sidebar__block">
      <h4 class="sidebar__title">Тип транспорта</h4>
      <select class="input" v-model="currentTransportType">
        <option v-for="(type, index) in getTransportTypesList" :key="index" :value="type">{{ type }}</option>
      </select>
    </div>
    <div class="sidebar__block">
      <h4 class="sidebar__title">Тип кузова</h4>
      <div v-for="(bodyType, index) in getBodyTypesList" :key="index" class="checkbox">
        <label class="checkbox__label">
          <input class="checkbox__input" type="checkbox" :value="bodyType" v-model="bodyTypeValue" />
          {{ bodyType }}
        </label>
      </div>
    </div>
    <div class="sidebar__block">
      <h4 class="sidebar__title">Марка</h4>
      <select class="input" v-model="currentBrand">
        <option v-for="(brand, index) in getBrandsList" :key="index" :value="brand">{{ brand }}</option>
      </select>
    </div>
    <div class="sidebar__block">
      <h4 class="sidebar__title">Модель</h4>
      <select class="input" v-model="currentModel">
        <option v-for="(model, index) in getModelsList" :key="index" :value="model">{{ model }}</option>
      </select>
    </div>
    <div class="sidebar__block">
      <h4 class="sidebar__title">Рік</h4>
      <input type="number" placeholder="Від" class="input" v-model.lazy="minYear" />
      <input type="number" placeholder="До" class="input" v-model.lazy="maxYear" />
    </div>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FilterPanel',

  computed: {
    ...mapGetters([
      'getTransportTypesList',
      'getCurrentTransportType',
      'getBodyTypesList',
      'getBrandsList',
      'getCurrentBrand',
      'getModelsList',
      'getCurrentModel',
      'getMinYear',
      'getMaxYear',
      'getSelectedBodyTypes',
    ]),

    currentTransportType: {
      get() {
        return this.getCurrentTransportType
      },
      set(newTransportType) {
        this.setCurrentTransportType(newTransportType)
      },
    },

    bodyTypeValue: {
      get() {
        return this.getSelectedBodyTypes
      },
      set(newBodyType) {
        this.setSelectedBodyTypes(newBodyType)
      },
    },

    currentBrand: {
      get() {
        return this.getCurrentBrand
      },

      set(newBrand) {
        this.setCurrentBrand(newBrand)
      },
    },

    currentModel: {
      get() {
        return this.getCurrentModel
      },
      set(newModel) {
        this.setCurrentModel(newModel)
      },
    },

    minYear: {
      get() {
        return this.getMinYear
      },
      set(newMinYear) {
        this.setCurrentMinYear(newMinYear)
      },
    },

    maxYear: {
      get() {
        return this.getMaxYear
      },
      set(newMaxYear) {
        this.setCurrentMaxYear(newMaxYear)
      },
    },
  },

  methods: {
    ...mapActions([
      'setCurrentTransportType',
      'setCurrentBrand',
      'setCurrentModel',
      'setCurrentMinYear',
      'setCurrentMaxYear',
      'setSelectedBodyTypes',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  max-width: 18.75rem;
  // .sidebar__block
  &__block {
    &:not(:last-child) {
      margin-bottom: 1.875rem;
    }
  }
  // .sidebar__title
  &__title {
    &:not(:last-child) {
      margin-bottom: 1.25rem;
    }
  }
}
.checkbox {
  display: block;
  // .checkbox__label
  &__label {
  }
  // .checkbox__input
  &__input {
  }
}
</style>
