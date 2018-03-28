<template>
  <div class="flex-parent">
    <Menu></Menu>
    <div class="page">
      <h1>Yo</h1>
      <div class="row">
        <div class="content col-xs-8">
        </div>
        <div class="col-xs-3">
          <Side></Side>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from './onEachPage/Menu.vue';
import Footer from './onEachPage/Footer.vue';
import Side from './onEachPage/Side.vue';
export default {
  components: {
    Menu,
    Footer,
    Side
  }
}
</script>
