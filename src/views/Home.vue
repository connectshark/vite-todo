<script setup>
import { ref } from 'vue'
import headerWrapperVue from '../components/headerWrapper.vue'
import listItem from '../components/listItem.vue'
import { useToDoStore } from '../stores/todo'
const store = useToDoStore()
store.init()

const userContent = ref('')

const enterContent = () => {
  if (userContent.value === '') {
    return
  }
  store.addList(userContent.value)
  userContent.value = ''
}
</script>

<template>
<headerWrapperVue/>
  <main class="py-4 max-w-screen-sm mx-auto">
    <input
      type="text"
      @keyup.enter="enterContent"
      v-model.trim="userContent"
      placeholder="輸入清單"
      class="transition text-gray-900 block mx-auto p-3 text-2xl rounded-lg shadow-lg w-5/6 border border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:border-transparent"
    />
  </main>
  <transition-group appear="true" name="list" class="max-w-screen-sm mx-auto" tag="ul">
    <listItem
      v-for="item in store.filterState"
      :key="item.id"
      :content="item.content"
      :checked="item.checked"
      :id="item.id"
    />
  </transition-group>
</template>