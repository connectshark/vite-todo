<script>
import { useToDoStore } from '../stores/todo'

export default {
  props: {
    content: {
      type: String
    },
    checked: {
      type: Boolean
    },
    id: {
      type: String
    }
  },
  setup() {
    const store = useToDoStore()
    return {
      store
    }
  }
}
</script>

<template>
  <div
    class="mx-auto w-4/5 bg-white rounded-2xl p-4 mb-4 transition hover:shadow-lg shadow-slate-400 flex items-center"
  >
    <div
      class="text-xl w-1/12 text-center cursor-pointer align-middle flex-shrink-0"
      @click="store.modifyState(id)"
    >
      <i class="bx bx-check-circle text-indigo-700 leading-7 align-middle" v-if="checked"></i>
      <i class="bx bx-circle text-indigo-300 leading-7 align-middle" v-else></i>
    </div>
    <p
      :class="{ 'line-through': checked }"
      class="overflow-hidden w-10/12 text-gray-700 text-ellipsis text-2xl decoration-indigo-700"
    >{{ content }}</p>
    <p
      @click="store.deleteItem(id)"
      class="text-xl ml-auto w-1/12 text-center text-indigo-300 hover:text-indigo-700 leading-7 align-middle flex-shrink-0"
    >
      <i class="bx bx-x-circle"></i>
    </p>
  </div>
</template>