<template>
  <div class="home">
    <main class="LayoutDefault__main">
      <slot/>
    </main>
  </div>
</template>

<script>
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import 'owl.carousel'
export default {
  name: 'home',
  components: { }
}
</script>

<style scoped>

</style>
