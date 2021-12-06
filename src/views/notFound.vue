<template>
<div class="notFound">
  <h2>404</h2>
  <router-link class="btn" to="/">back</router-link>
</div>
</template>

<script>
export default {
  setup () {
    
  }
}
</script>
<style scoped lang="scss">
.notFound{
  h2{
    background-image: url('https://source.unsplash.com/random/600x600/');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    font-size: 6rem;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
    text-align: center;
  }
}
</style>