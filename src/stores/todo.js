import { defineStore } from 'pinia'
import Filter from '../utils/filter'
import LS from '../utils/ls'

export const useToDoStore = defineStore('todo',{
  state: () => ({
    filter: 'all',
    list: []
  }),
  actions: {
    modifyFilter (newState) {
      this.filter = newState
    },
    init () {
      this.list = LS.load('list')
    },
    addList (content) {
      this.list.push({
        checked: false,
        content: content,
        id: new Date().getTime().toString()
      })
      LS.save('list', this.list)
    },
    modifyState (id) {
      const index = this.list.findIndex(item => item.id === id)
      this.list[index].checked = !this.list[index].checked
      LS.save('list', this.list)
    },

    deleteItem (id) {
      const index = this.list.findIndex(item => item.id === id)
      this.list.splice(index, 1)
      LS.save('list', this.list)
    }
  },

  getters: {
    filterState () {
      return Filter[this.filter](this.list)
    }
  }
})
