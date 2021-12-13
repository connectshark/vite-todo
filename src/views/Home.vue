<script setup>
import { ref } from 'vue'
import listItem from '../components/listItem.vue'
import { useToDoStore } from '../stores/todo'
const store = useToDoStore()
store.init()

const userContent = ref('')

const enterContent = () => {
  store.addList(userContent.value)
  userContent.value = ''
}
</script>

<template>
  <main class="py-4 max-w-screen-sm mx-auto">
    <input
      type="text"
      @keyup.enter="enterContent"
      v-model.trim="userContent"
      placeholder="輸入清單"
      class="transition text-gray-900 block mx-auto p-3 text-2xl rounded-lg shadow-lg w-5/6 border border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:border-transparent"
    />
  </main>
  <ul class="max-w-screen-sm mx-auto">
    <transition-group name="list" tag="li">
      <listItem
        v-for="item in store.filterState"
        :key="item.id"
        :content="item.content"
        :checked="item.checked"
        :id="item.id"
      />
    </transition-group>
  </ul>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>