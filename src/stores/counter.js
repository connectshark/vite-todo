import { defineStore } from 'pinia'

export const useCounterStore = defineStore('count',{
  state: () => ({
    counter: 0,
    input: ''
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
