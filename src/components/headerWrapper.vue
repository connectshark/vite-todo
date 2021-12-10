<script setup>

</script>

<template>
<header class="bg-gradient-to-r from-indigo-400 to-indigo-500 text-center">
  <h1 class=" text-white text-2xl py-4">ToDoList</h1>
  <ul class=" text-base">
    <li class=" inline-block px-2">
      <router-link class=" text-white" to="/">全部</router-link>
    </li>
    <li class=" inline-block px-2">
      <router-link class=" text-white" to="/done">已完成</router-link>
    </li>
    <li class=" inline-block px-2">
      <router-link class=" text-white" to="/undo">未完成</router-link>
    </li>
  </ul>
</header>
</template>