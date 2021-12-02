<script setup>
import { useCounterStore } from '@/stores/counter'

const count = useCounterStore()

const vFocus = {
  mounted(el) {
    el.focus()
  }
}
</script>

<template>
  <main class="home">
    <h2>{{ count.doubleCount }}</h2>
    <input type="button" value="+" @click="count.increment" />
  </main>
</template>

<style scoped>
</style>