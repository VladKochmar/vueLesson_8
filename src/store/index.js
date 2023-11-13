import { createStore } from 'vuex'

// Task 1
import { productsList, selectorsList } from '@/data/products'

// Task 2
import { cars } from '@/data/cars'

export default createStore({
  state() {
    return {
      // Task 1

      productsList: [],
      selectorsList: [],
      currentProductCategory: null,

      // Task 2

      carsList: [],
      currentTransportType: null,
      selectedBodyTypes: [],
      currentBrand: null,
      currentModel: null,
      minYear: null,
      maxYear: null,
    }
  },

  getters: {
    // Task 1

    getProductsList: ({ productsList }) => productsList,

    getSelectorsList: ({ selectorsList }) => selectorsList,

    getFilteredProductsList: ({ productsList, currentProductCategory }) =>
      currentProductCategory
        ? productsList.filter((product) => product.category.toLowerCase() === currentProductCategory.toLowerCase())
        : productsList,

    // Task 2

    getCarsList: ({ carsList }) => carsList,

    getTransportTypesList: ({ carsList }) => [...new Set(carsList.map((car) => car.transportType))],

    getCurrentTransportType: (state) => state.currentTransportType,

    getBodyTypesList: (state) =>
      !state.currentTransportType
        ? [...new Set(state.carsList.map((car) => car.bodyType))]
        : [
            ...new Set(
              state.carsList
                .filter((car) => car.transportType === state.currentTransportType)
                .map((car) => car.bodyType)
            ),
          ],

    getSelectedBodyTypes: (state) => state.selectedBodyTypes,

    getBrandsList: ({ carsList }) => [...new Set(carsList.map((car) => car.brand))],

    getCurrentBrand: (state) => state.currentBrand,

    getModelsList: (state) =>
      !state.currentBrand
        ? [...new Set(state.carsList.map((car) => car.model))]
        : [...new Set(state.carsList.filter((car) => car.brand === state.currentBrand).map((car) => car.model))],

    getCurrentModel: (state) => state.currentModel,

    getMinYear: (state) => state.minYear,

    getMaxYear: (state) => state.maxYear,

    getFilteredCarsList: (state) => {
      let filteredList = state.carsList.filter((car) => {
        const transportType = !state.currentTransportType || state.currentTransportType === car.transportType
        const bodyTypes = !state.selectedBodyTypes.length || state.selectedBodyTypes.includes(car.bodyType)
        const brand = !state.currentBrand || state.currentBrand === car.brand
        const model = !state.currentModel || state.currentModel === car.model
        const minYear = !state.minYear || car.year >= state.minYear
        const maxYear = !state.maxYear || car.year <= state.maxYear

        return transportType && bodyTypes && brand && model && minYear && maxYear
      })

      if (filteredList.length === 0) filteredList = []

      return filteredList
    },
  },

  mutations: {
    // Task 1

    setProductsList(state, list) {
      state.productsList = JSON.parse(JSON.stringify(list))
    },

    setSelectorsList(state, list) {
      state.selectorsList = JSON.parse(JSON.stringify(list))
    },

    setCategory(state, category) {
      state.currentProductCategory = category
    },

    // Task 2

    setCarsList(state, list) {
      state.carsList = JSON.parse(JSON.stringify(list))
    },

    setTransportType(state, type) {
      state.currentTransportType = type
    },

    setSelectedBodyTypes(state, selectedBodyType) {
      state.selectedBodyTypes = selectedBodyType
    },

    setBrand(state, brand) {
      state.currentBrand = brand
    },

    setModel(state, model) {
      state.currentModel = model
    },

    setMinYear(state, year) {
      state.minYear = year
    },

    setMaxYear(state, year) {
      state.maxYear = year
    },
  },

  actions: {
    // Task 1

    loadProductsList({ commit }) {
      commit('setProductsList', productsList)
    },

    loadSelectorsList({ commit }) {
      commit('setSelectorsList', selectorsList)
    },

    setProductCategory({ commit }, category) {
      commit('setCategory', category)
    },

    // Task 2

    loadCarsList({ commit }) {
      commit('setCarsList', cars)
    },

    setCurrentTransportType({ commit }, type) {
      commit('setTransportType', type)
    },

    setSelectedBodyTypes({ commit }, type) {
      commit('setSelectedBodyTypes', type)
    },

    setCurrentBrand({ commit }, brand) {
      commit('setBrand', brand)
    },

    setCurrentModel({ commit }, model) {
      commit('setModel', model)
    },

    setCurrentMinYear({ commit }, year) {
      commit('setMinYear', year)
    },

    setCurrentMaxYear({ commit }, year) {
      commit('setMaxYear', year)
    },
  },

  modules: {},
})
