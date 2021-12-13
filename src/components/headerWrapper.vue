<script setup>
import { useToDoStore } from '../stores/todo'

const store = useToDoStore()
const btns = [{
  key: 'all',
  name: '全部'
}, {
  key: 'done',
  name: '已完成'
}, {
  key: 'undo',
  name: '未完成'
}]
</script>

<template>
  <header class="bg-gradient-to-r from-indigo-400 to-indigo-500 text-center">
    <h1 class="text-white text-4xl py-4 font-bold max-w-screen-sm mx-auto">待辦清單</h1>
    <ul class="text-base py-2 max-w-screen-sm mx-auto">
      <li class="inline-block px-2" v-for="btn in btns" :key="btn.key">
        <button
          class=" text-gray-100 hover:text-white transition"
          :class="[{ 'font-bold': store.filter === btn.key }, { 'text-white': store.filter === btn.key }]"
          @click="store.modifyFilter(btn.key)"
        >{{ btn.name }}</button>
      </li>
    </ul>
  </header>
</template>