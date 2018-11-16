<template>
  <div class="container-fluid">
      <div class="row justify-content-md-center">
          <div class="col-sm-1">
              <!--espacio vacio para maquetado-->
          </div>
          <div class="col-sm-10">
              <img class="logo-p" alt="Metal Evolution Logo" src="../assets/metal.png">
          </div>
          <div class="col-sm-1">
              <!--espacio vacio para maquetado-->
          </div>
      </div>
      <div class="row justify-content-md-center">
          <div class="col-sm-1">
              <!--espacio vacio para maquetado-->
          </div>
          <div class="col-sm-4 text-center">
              <a target="_blank" v-bind:href="bangerFilms"><img class="logo" src="../assets/BANGER-Logo.svg" alt="banger films"></a>
          </div>
          <div class="col-sm-2 text-center">
              <img id="arrow" src="../assets/down.png" alt="inicio">
          </div>
          <div class="col-sm-4 text-center">
              <a target="_blank" v-bind:href="online"><img class="logo" src="../assets/logo_footer.png" alt="banger tv"></a>
          </div>
          <div class="col-sm-1">
              <!--espacio vacio para maquetado-->
          </div>
      </div>
      <div class="row justify-content-md-center">
          <div class="col-sm-1">
              <!--espacio vacio para maquetado-->
          </div>
          <div class="col-sm-10 text-center">
              <button class="btn btn-outline-danger" type="submit"><router-link to="/Metal"><img id="guitar" src="../assets/guitar.png" alt="inicio"></router-link></button>
          </div>
          <div class="col-sm-1">
              <!--espacio vacio para maquetado-->
          </div>
      </div>
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    //msg: String,
    //var1: String
    },
    data(){
        return{
            counter: 0,
            bangerFilms: 'https://bangerfilms.com/banger-films/',
            online: 'http://bangertv.com/shows/metal-evolution/'
        }
    },
    methods:{
        nea: function(){
            this.counter++;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css');
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.logo{
    width: 80%;
}

.logo-p{
    width: 100%;
}

#guitar{
    height:50px;
}

#arrow{
    padding-top: 1.5em;
    height:120px;
}

.container{
    margin:0;
    padding: 0;
}
</style>
