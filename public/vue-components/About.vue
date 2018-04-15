<template>
  <div class="flex-parent">
    <Menu></Menu>
    <div class="page">
      <h1>About the Nerd with yarn</h1>
      <div class="row">
        <div class="content col-xs-8">
          <p>Hi! My name is Lisa and I live in the Netherlands. </p>
          <p class="question">"What do you do with yarn?"</p>
          <p>
            I started to crochet in 2016, although I learned to crochet about two years before. When I was a young girl, I learned how to knit in elementary school!<br>
            I fell in love with yarn, hooks, stitches, fiberfill and anything else crochet-related. I recently started knitting again as well, and I love it a lot more than I remember. I also like to get creative with non-yarn materials,
            but yarn is my go-to crafting material.
          </p>
          <p class="question">"Ok, we get the yarn part. Why are you a nerd?"</p>
          <p>
            First of all, my day job is making websites! I am a full-stack javascript developer and I made this website from scratch. Cool, huh?<br>
            Second of all, I love a lot of geeky stuff: Pokémon, games, Harry Potter and Star Wars to name a few. I owe a lot of that love to my boyfriend:
            without him I would have never started gaming.<br>
            Third of all, I love to read. Once, I read all the Harry Potter books in seven days! At the <router-link to="/books" class="to-page">Books</router-link> section you can read about my favorite books, so take a look there if you're into books as well.<br>
            And lastly, learning new cool things is one of my hobbies. I love to learn and to read, so you can imagine I loved school as well. That makes me a nerd in four definitions of the word!
          </p>
          <p class="question">"Cool! And what can I do on your website?"</p>
          <p>
            You can read my <router-link to="/blog" class="to-page">blog</router-link>, where I share my experience with crochet. Also, you can go to my <a class="to-page" href="https://www.etsy.com/nl/shop/NerdWithYarnNL">Etsy shop</a> to browse cool stuff! Please note that patterns are "shipped" worldwide, but handmade items only in the Netherlands.
            That's it for now, but I have a lot planned for this website! I'll keep you posted.
          </p>
          <br>
          <div class="row">
            <div class="col-xs-3">
              <img class="img-size" src="./../styles/images/crates.jpg" alt="My yarn stash!">
            </div>
            <div class="col-xs-3">
              <img class="img-size" src="./../styles/images/wip.jpg" alt="Work in progress">
            </div>
            <div class="col-xs-3">
              <img class="img-size" src="./../styles/images/flower-granny.jpg" alt="A stack of granny squares next to flowers">
            </div>
            <div class="col-xs-3">
              <img class="img-size" src="./../styles/images/donuts-bujo.jpg" alt="Donuts and my bullet journal">
            </div>
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
export default {
  components: {
    Menu,
    Footer,
    Side
  }
}
</script>
