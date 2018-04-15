<template>
  <div class="flex-parent">
    <Menu></Menu>
    <div class="page">
      <h1>Blog</h1>
      <div class="row">
        <div class="content col-xs-8">
          <div v-for="blog in blogs">
            <h3>{{blog.title}}</h3>
            <h6>{{blog.created}}</h6>
            <hr>
            <p>{{blog.body}}</p>
          </div>
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
import axios from 'axios';
export default {
  data: function() {
    return {
      blogs: []
    }
  },
  components: {
    Menu,
    Footer,
    Side
  },
  mounted() {
    axios.get('http://localhost:5000/blog/all', {withCredentials:true}).then((response) => {
      this.blogs = response.data
    })
  }
}
</script>
