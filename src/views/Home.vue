<script setup>
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()
</script>

<template>
<main class="home">
  <h2>{{counterStore.doubleCount}}</h2>
  <input type="button" value="+" @click="counterStore.increment">
</main>
</template>

<style scoped>

</style>