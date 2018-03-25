<template>
  <div class="flex-parent">
    <Menu></Menu>
    <div class="page">
      <h1>Admin</h1>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from './onEachPage/Menu.vue';
import Footer from './onEachPage/Footer.vue';
export default {
  components: {
    Menu,
    Footer
  }
}
</script>
