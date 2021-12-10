<script setup>

</script>

<template>
<header class="bg-gradient-to-r from-indigo-400 to-indigo-500 text-center ">
  <h1 class=" text-white text-4xl py-4 font-bold  max-w-screen-sm mx-auto">待辦清單</h1>
  <ul class=" text-base py-2 max-w-screen-sm mx-auto">
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