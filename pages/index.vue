<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="home-text content">
        <div class="home-content">
          <div class="has-text-right">
            <span class="icon is-large">
            <i class="fa fa-2x fa-linkedin" aria-hidden="true"></i>
            </span>
            <span class="icon is-large">
            <i class="fa fa-2x fa-github" aria-hidden="true"></i>
            </span>
          </div>
          <h1 class="title">
          Coen Hallie
          </h1>
        <h2 class="subtitle">
          <vue-typer :text='["Full Stack Developer", "Experienced VueJS designer"]'></vue-typer>
        </h2>
        </div>
        <div class="columns has-text-centered">
          <div class="column">
          <nuxt-link class="button is-white" to="/portfolio">Portfolio</nuxt-link>
          </div>
          <div class="column">
            <a class="button is-white">Blog</a>
          </div>
          <div class="column">
          <a class="button is-white">Contact me</a>
          </div>
        </div>
      </div>
      <vue-particles
        color="#e6ccff"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="6"
        linesColor="#e6ccff"
        :linesWidth="3"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style scoped>

.home-text {
  background-color:#fff;
  box-shadow: 0px 30px 40px rgba(0,0,0,.1);
  z-index:999;
  margin:auto auto;
  padding:30px 20px 30px 20px;
  width:50%
}

  #particles-js {
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  font-weight: 500;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
  word-spacing: 5px;
}

.subtitle {
  font-weight: 300;
  font-size: 34px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
