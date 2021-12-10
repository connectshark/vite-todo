import { defineStore } from 'pinia'

export const useToDoStore = defineStore('todo',{
  state: () => ({
    list: [
      {
        id: '1639128867000',
        checked: true,
        content: '000'
      },
      {
        id: '1639128867123',
        checked: false,
        content: 'name'
      },
      {
        id: '1639128867568',
        checked: false,
        content: 'iejdkc'
      }
    ]
  }),
  actions: {
    addList (content) {
      this.list.push({
        checked: false,
        content: content,
        id: new Date().getTime().toString()
      })
    },
    modifyState (id) {
      const index = this.list.findIndex(item => item.id === id)
      this.list[index].checked = !this.list[index].checked
    }
  }
})
