<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-dark">
              <div class="container">
              <a class="navbar-brand" target="_blank" v-bind:href="geogeeks"><img id="logo" src='./assets/geogeeks_logo.png' alt="Logo Geogeeks"></a>
              <h6 class="text-white">Semillero de Innovación Geográfica</h6>
              </div>
          </nav>
          <div class="container-fluid">
              <router-view/>
          </div>
  </div>
</template>

<script>
//import Home from './components/Home.vue'

export default {
  name: 'app',
  data(){
    return{
        variable: 0,
        geogeeks: 'http://desarrolladores.esri.co/'
    }
  },
  components: {
},
methods:{
    increase: function(){
        this.variable--;
    }
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');
#app {
    font-family: 'Lato', sans-serif;
    background: url(http://arsenal-s3.gomedia.us/wp-content/uploads/gma-texture-collection-01-metal-pack-01-hero-shot.jpg);
    height: 100%;
    background-repeat: repeat;
}
html, body {
    height: 100%;
}
.navbar {
    background-color: #2F3241;
    border-bottom: 1px solid grey;
    background: url('https://www.freewebheaders.com/wordpress/wp-content/gallery/featured-website-headers/abstract-art-red-background-header-4812.jpg');

}
#logo {
    height: 40px;
}

.container{
    margin: 0;
    padding: 0;
}

</style>
