<script setup>
</script>

<template>
<h1>待辦事項</h1>
<ul>
  <li>
    <router-link to="/">All</router-link>
  </li>
  <li>
    <router-link to="/on">All</router-link>
  </li>
</ul>
<router-view></router-view>
</template>

<style>
#app{
  font-family: 'Roboto Mono', monospace, 'openhuninn', 'Noto Sans TC', sans-serif;
  width: 100%;
  margin: auto;
  max-width: 600px;
}
</style>