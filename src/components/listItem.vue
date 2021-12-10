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
  setup (props) {
    const store = useToDoStore()
    const modify = () => {
      store.modifyState(props.id)
    }

    return {
      modify
    }
  }
}
</script>

<template>
<li class="mx-auto w-4/5 bg-white rounded-2xl p-4 mb-4 transition hover:shadow-lg shadow-slate-400">
  <p class="text-gray-700 text-2xl inline-block">
    <span class="text-xl cursor-pointer" @click="modify">
      <i class='bx bx-check-circle text-indigo-700' v-if="checked"></i>
      <i class='bx bx-circle text-indigo-300' v-else></i>
    </span>{{content}}</p>
</li>
</template>