<template>
  <div>
    <AppHeader />
    <Nuxt id="my-app" />
    <Appfooter />
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue'
import Appfooter from '@/components/Appfooter.vue'
export default {
  components: { AppHeader}
}
</script>
<style>
html {
 font-family: 'Nunito', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6, p{padding: 0; margin: 0;}

.container{
  max-width: 1250px;
  margin: 0 auto;
}
 
</style>