<template>
    <div class="container-fluid">
        <div id="containerMapa">
            <div  class="row">
                <div class="col-9">
                    <div id="viewDiv" class="h-100"></div>
                </div>
                <div class="col-3 alto">
                    <div>
                      </div>
                      <div class="card-body">
                        <h3 class="card-header text-center"><b>{{titulo}}</b></h3>
                        <h5 class="card-title"><b>Descripción</b></h5>
                        <p class="card-text"><b>{{desc}}</b></p>
                        <h5 class="card-title"><b>Influencias</b></h5>
                        <p class="card-text"><b>{{influencia}}</b></p>
                      </div>
                    <h3 class="text-center card-header"><button v-bind:href="linkRadio" class="btn btn-primary">Escucha</button></h3>
                </div>
            </div>
        </div>
        <div id="containerBotones d-flex flex-column justify-content-center">
            <div class="row">
                <div class="col-2 d-flex flex-column justify-content-center">
                    <!--espacio vacio para maquetado-->
                    <label v-on:click="titulo='Pre-Metal';mostrarDescripción();
                    createMap(-74,4,5,'preMetal')" type="label" class=" badge ">
                    <img class="iconoGenero" src="../assets/pines_metal-26.png">Pre-Metal</label>
                </div>
                <div class="col-2 d-flex flex-column justify-content-center">
                    <!--espacio vacio para maquetado-->
                    <ul>
                        <li><label v-on:click="titulo='Progressive Rock';mostrarDescripción();
                        createMap(0,0,0,'rockProg')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-20.png">Progressive Rock.</label></li>
                        <li><label v-on:click="titulo='Early Metal U.S.';mostrarDescripción();
                        createMap(0,0,0,'earlyMetalUS')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-27.png">Early Metal U.S.</label></li>
                        <li><label v-on:click="titulo='Early Metal U.k.';mostrarDescripción();
                        createMap(0,0,0,'earlyMetalUK')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-13.png">Early Metal U.K.</label></li>
                        <li><label v-on:click="titulo='Shock Rock';mostrarDescripción();shockRock
                        createMap(0,0,0,'shockRock')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-11.png">Shock Rock</label></li>
                        <li><label v-on:click="titulo='Punk';mostrarDescripción();
                        createMap(0,0,0,'originalPunk')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-09.png">Punk</label></li>
                    </ul>
                </div>
                <div class="col-2 d-flex flex-column justify-content-center">
                    <!--espacio vacio para maquetado-->
                    <ul>
                        <li><label v-on:click="titulo='Progressive Metal';mostrarDescripción();
                        createMap(0,0,0,'progMetal')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-21.png">Progressive Metal</label></li>
                        <li><label v-on:click="titulo='Power Metal';mostrarDescripción();
                        createMap(0,0,0,'powerMetal')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-23.png">Power Metal</label></li>
                        <li><label v-on:click="titulo='New Wave Of British Heavy Metal';mostrarDescripción();
                        createMap(0,0,0,'nwobhm')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-16.png">N.W.B.H.M.</label></li>
                        <li><label v-on:click="titulo='HardCore';mostrarDescripción();
                        createMap(0,0,0,'hardcore')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-06.png">HardCore</label></li>
                    </ul>
                </div>
                <div class="col-2 d-flex flex-column justify-content-center">
                    <!--espacio vacio para maquetado-->
                    <ul>
                        <li><label v-on:click="titulo='Doom Metal';mostrarDescripción();
                        createMap(0,0,0,'doomMetal')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-04.png">Doom Metal</label></li>
                        <li><label v-on:click="titulo='Glam Metal/Hard Rock';mostrarDescripción();
                        createMap(0,0,0,'glamhardrock')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-14.png">Glam/Hard Rock</label></li>
                        <li><label v-on:click="titulo='Grunge';mostrarDescripción();
                        createMap(0,0,0,'grunge')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-07.png">Grunge</label></li>
                        <li><label v-on:click="titulo='Thrash Metal';mostrarDescripción();
                        createMap(0,0,0,'thrash')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-15.png">Thrash Metal</label></li>
                        <li><label v-on:click="titulo='Fisrt Wave Of Black Metal';mostrarDescripción();
                        createMap(0,0,0,'fioblack')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-02.png">F.W.Black Metal</label></li>
                        <!-- <li><label v-on:click="titulo='Industrial Metal';mostrarDescripción()
                        " type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-05.png">Industrial Metal</label></li> -->
                    </ul>
                </div>
                <div class="col-2 d-flex flex-column justify-content-center">
                    <!--espacio vacio para maquetado-->
                    <ul>
                        <li><label v-on:click="titulo='Hard Alternative';mostrarDescripción();
                        createMap(0,0,0,'hardAlternative')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-12.png">Hard Alternative</label></li>
                        <li><label v-on:click="titulo='MetalCore';mostrarDescripción();
                        createMap(0,0,0,'metalCore')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-22.png">Metalcore</label></li>
                        <li><label v-on:click="titulo='Death Metal';mostrarDescripción();
                        createMap(0,0,0,'deathMetal')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-17.png">Death Metal</label></li>
                        <!-- <li><label v-on:click="titulo='Grindcore';mostrarDescripción()
                        " type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-01.png">Grindcore</label></li> -->
                        <li><label v-on:click="titulo='Black Metal';mostrarDescripción();
                        createMap(0,0,0,'blackMetal')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-03.png">Black Metal</label></li>
                    </ul>
                </div>
                <div class="col-2 d-flex flex-column justify-content-center">
                    <!--espacio vacio para maquetado-->
                    <ul>
                        <li><label v-on:click="titulo='Goth Metal';mostrarDescripción();
                        createMap(0,0,0,'gothMetal')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-08.png">Goth Metal</label></li>
                        <li><label v-on:click="titulo='Nu Metal';mostrarDescripción();
                        createMap(0,0,0,'nuMetal')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-29.png">Nu Metal</label></li>
                        <!-- <li><label v-on:click="titulo='Wave Of American Metal';mostrarDescripción()
                        " type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-28.png">N.W.American Metal</label></li>
                        <li><label v-on:click="titulo='Swedish Extreme Metal';mostrarDescripción()
                        " type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-18.png">Swedish Extreme Metal</label></li> -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { loadModules } from "esri-loader";
export default {
    name: 'Metal',
    props: {
        //msg: String,
        //var1: String
    },
    data(){
        return{
            counter: 0,
            titulo: 'Género',
            desc: 'description genero',
            influencia: 'influencias del género',
            linkRadio:'',
            capa:''
        }
    },
    methods:{
        mostrarDescripción: function(){
            if(this.titulo==='Pre-Metal'){
                this.desc = 'Bandas que sentaron las bases y dieron un sonido precursor para el desarrollo del Metal'
                this.influencia = 'Reciben influnecias de generos como el blues, jazz, R&B entre otros'
                this.linkRadio = 'https://open.spotify.com/album/4qaULUomLa3wAp3B3gNIoD'
            }else if(this.titulo==='Progressive Rock'){
                this.desc = 'Junta elementos del rock psicodelico con art-rock, jams extensos y melodicos, siempre un genero muy experimental y vistuoso musicalmente caracterizado por el cambio progresivo de tempos en sus obras'
                this.influencia = 'Pre Metal'
                this.linkRadio = 'https://open.spotify.com/user/thesoundsofspotify/playlist/1sYzsb7P37XzNZoUR2GGdm'
                //https://www.ranker.com/list/best-progressive-rock-bands-and-artists/reference?ref=collections&l=101434&collectionId=2001&li_source=LI&li_medium=desktop-top-collection
            }else if(this.titulo==='Early Metal U.S.'){
                this.desc = 'Bandas que dieron inicio a los primeros sonidos del metal en estados unidos, guitarras distorsionadas aun conservando en su sonido una escencia muy norte americana'
                this.influencia = 'Pre Metal'
                this.linkRadio = ''
            }else if(this.titulo==='Early Metal U.k.'){
                this.desc = 'Bandas expermientando con diferentes influencias y sonidos, mas cercano a lo que seria el heavy metal, considerados como los padres del genero'
                this.influencia = 'Pre Metal'
                this.linkRadio = ''
            }else if(this.titulo==='Shock Rock'){
                this.desc = 'Incorpora elementos del glam hardrock y metal, uno de los generos mas teatrales caracterizado por sus presentaciones siendo un show en todo el sentido de la palabra'
                this.influencia = 'Pre Metal'
                this.linkRadio = ''
                //https://www.ranker.com/list/shock-rock-bands-and-musicians/reference
            }else if(this.titulo==='Punk'){
                this.desc = 'Agresividad y rebeldia como forma de expresión, buscaban lograr una transformación social y recuperar ese espiritu que estaba perdiendo en el rock'
                this.influencia = 'Influenciados por el rock buscan sonidos menos elaborados musicalmente con sonido y energia mas cruda'
                this.linkRadio = ''
                //https://www.fucsia.co/moda/inspiracion/articulo/historia-del-punk/54732
            }else if(this.titulo==='Progressive Metal'){
                this.desc = 'Caracterizado por la innovación de composición y arreglos complejos, la mayor parte de las bandas de metal progresivo se consolidan en los años 80, como principales influencias tienen a las bandas Fates Warning y Queensryche.'
                this.influencia = 'Progressive Rock'
                this.linkRadio = ''
                //https://www.guitarristas.info/reportajes/metal-progresivo-20-discos-debes-tener/1808
                //https://www.taringa.net/+musica/definicion-de-metal-progresivo_12s13q
            }else if(this.titulo==='Power Metal'){
                this.desc = 'Caracterizado por sus voces en registros muy altos con tematicas fantasticas/epicas y un sonido muy influenciado por el heavy metal'
                this.influencia = 'Early Metal UK'
                this.linkRadio = ''
                //https://www.mondosonoro.com/blog-musica/power-metal-obras-referenciales/
            }else if(this.titulo==='New Wave Of British Heavy Metal'){
                this.desc = 'Una gran oleada de bandas que se apropiaron y desarrollaron el estilo de lo que seria el heavy metal donde surgen bandas muy influyentes en el Metal a nivel mundial'
                this.influencia = 'Early Metal U.K.- Punk'
                this.linkRadio = ''
            }else if(this.titulo==='HardCore'){
                this.desc = 'Sonido caracterizado por los aspectos mas energicos del punk, tempos y compases muy rapidos con guitarras distorcionadas con pocos arreglos junto con voces y sonidos muy agresivos'
                this.influencia = 'Punk'
                this.linkRadio = ''
            }else if(this.titulo==='Doom Metal'){
                this.desc = 'Literalmente quiere decir "metal pesimista" o "metal de la condenación" caracterizado por ser lento, oscuro, depresivo y tenebroso con un sonido denso'
                this.influencia = 'Early Metal U.K.'
                this.linkRadio = ''
                //https://www.last.fm/es/tag/doom+metal/wiki
            }else if(this.titulo==='Glam Metal/Hard Rock'){
                this.desc = 'Influenciados por el heavy metal incorporan una vista muy glamorosa a su estetica usando maquillaje y demas elementos, junto con tematicas romanticas o sexuales'
                this.influencia = 'EarlyMetal U.S. - N.W.O.B.H.M. '
                this.linkRadio = ''
                //https://www.ranker.com/list/glam-metal-bands-and-musicians/reference
            }else if(this.titulo==='Grunge'){
                this.desc = 'Sus letras se caracterizaban por reflejas apatia y desencanto, con sonidos de guitarra distorsionados creando un nuevo sonido con estetica muy dejada'
                this.influencia = 'EarlyMetal U.S.- Early Metal U.K.'
                this.linkRadio = ''
                //https://www.ecured.cu/Grunge
            }else if(this.titulo==='Thrash Metal'){
                this.desc = 'El thrash metal originado principalmente en el bay area de san francisco muestran gran influencia del heavy metal, caracterizado por su sonido rapido y baterias sonando como un azote, surgiendo bandas muy influyentes'
                this.influencia = 'N.W.O.B.H.M. - Hard Core - Punk'
                this.linkRadio = ''
            }else if(this.titulo==='Fisrt Wave Of Black Metal'){
                this.desc = 'Sintiendo de una gran influencia del heavy metal tienen un sonido mas oscuro y estridente, iniciando con tematicas ocultistas, paganas tambien algunas relacionadas a satan'
                this.influencia = 'N.W.O.B.H.M.'
                this.linkRadio = ''
            }else if(this.titulo==='Industrial Metal'){
                this.desc = 'Usualmente está centrada en riffs de guitarra, afinadas muy graves, sintetizadores/secuenciadores muy distorsionados, y no posee un estilo vocal definido, con una estetica bizarro'
                this.influencia = 'Shock Rock'
                this.linkRadio = ''
                //https://www.last.fm/es/tag/industrial+metal/wiki
            }else if(this.titulo==='Hard Alternative'){
                this.desc = 'Género que toma la influencia del rock y metal juntando con otros generos alternativos creando nuevos sonidos y utilizando diferentes elementos de otros géneros'
                this.influencia = 'Grunge'
                this.linkRadio = 'https://open.spotify.com/user/thesoundsofspotify/playlist/2DbQNCosMDvDew7dKFGEMa'
            }else if(this.titulo==='MetalCore'){
                this.desc = 'Junta principalmente el heavy metal y hardcore creando musica rapida, pesada con voz gutural y en algunos momentos melodica'
                this.influencia = 'Hard Core - Thrash Metal'
                this.linkRadio = ''
            }else if(this.titulo==='Death Metal'){
                this.desc = 'Se caracteriza por voces guturales y profundas, guitarras muy distorsionadas y generalmente subafinadas, las letras abarcan temas desde sentimentalismo, odio, melancolia, temas de politica y ambientales, romanticismo y violencia, algunas sobre el gore explorando la muerte'
                this.influencia = 'Thrash Metal'
                this.linkRadio = ''
                //https://www.ecured.cu/Death_Metal
            }else if(this.titulo==='Grindcore'){
                this.desc = 'Este género es una de las variantes más crudas y rápidas del hardcore punk, Grind significa pulverizar o machacar en un mortero y se refiere a la velocidad de los temas que se tocan'
                this.influencia = 'Thrash Metal - Hard Core'
                this.linkRadio = ''
                //https://www.last.fm/es/tag/grindcore/wiki
            }else if(this.titulo==='Black Metal'){
                this.desc = 'El género resucita antiguos ritos paganos así como el honor a la trascendencia del guerrero usa voces guturales y sonidos que crean una atmosfera oscura, usan tematicas ocultistas, dioses de otras mitologías reviviendo epocas y leyendas'
                this.influencia = 'Thras Metal - First wave of Black Metal'
                this.linkRadio = ''
                //https://mitologias.readthedocs.io/en/latest/modules/mitologia/blackmetal.html
            }else if(this.titulo==='Goth Metal'){
                this.desc = 'Generalemente caracterizado por sus atmosferas oscuras combinando el rock gotico con el heavy metal, donde es un género muy abierto en cuanto a su rango de estilos vocales con tematicas de romanticismo, melodrama y pasion'
                this.influencia = 'Doom Metal'
                this.linkRadio = ''
            }else if(this.titulo==='Nu Metal'){
                this.desc = 'Combina elementos del hevy metal con otros generos de musica como hip-hop, rock alternativo, funk, grunge entre otros'
                this.influencia = 'Hard Alternative - Thrash Metal'
                this.linkRadio = ''
            }else if(this.titulo==='Wave Of American Metal'){
                this.desc = 'Género que junta muchas influencias exitentes en el Metal no se caracteriza por un mismo sonido si no el momento y lugar de su surgimiento e influencias'
                this.influencia = 'Metal Core - Thrash Metal'
                this.linkRadio = ''
            }else if(this.titulo==='Swedish Extreme Metal'){
                this.desc = 'Metal extremo, sonido extremo en cuanto a guitarras rapidas, baterias, bajos y voz, con temáticas muy variadas'
                this.influencia = 'Death Metal - Thrash Metal - Grindcore'
                this.linkRadio = ''
            }
        },
        createMap(long,lat,zoo,layerEntra) {
            var idCapa='';
            const options = {
            url: "https://js.arcgis.com/4.8/"
            };
            function getIdcapa(layerEntra){
                if(layerEntra==='preMetal'){
                    idCapa= "aace738283d448e1912dd6cf16f6b28f"
                }else if(layerEntra ==='rockProg'){
                    idCapa= "4840218a7acf48ab86b5443012bc11e4"
                }else if(layerEntra ==='earlyMetalUS'){
                    idCapa= "b481595fb24d4cd79e53c23a9921e2db"
                }else if(layerEntra ==='earlyMetalUK'){
                    idCapa= "d7a7d56aa62142ea9847a9240f8897e1"
                }else if(layerEntra === 'shockRock'){
                    idCapa= "7fa390e8338a41af947b79591a2302a7"
                }else if(layerEntra ==='originalPunk'){
                    idCapa= "93dd57df72934870bf7607394042ac04"
                }else if(layerEntra ==='progMetal'){
                    idCapa= "53d2580e857d44e89ef571875e2be886"
                }else if(layerEntra ==='powerMetal'){
                    idCapa= "41f8f4fcb9a048869a1f5f5566417581"
                }else if(layerEntra ==='nwobhm'){
                    idCapa= "874e5b890e9b485fb818ce3454d04410"
                }else if(layerEntra ==='hardcore'){
                    idCapa= "cd63f62b6a6d4c5397956d51899ce752"
                }else if(layerEntra ==='glamhardrock'){
                    idCapa= "0c6b9b033583498d90cf4169744682e8"
                }else if(layerEntra==='Glam Metal/Hard Rock'){
                    idCapa= "0c6b9b033583498d90cf4169744682e8"
                }else if(layerEntra ==='grunge'){
                    idCapa= "efbe12d177bd4bbab19f2877200ab9b7"
                }else if(layerEntra ==='thrash'){
                    idCapa= "494429f428d045afae99c379eda5e25c"
                }else if(layerEntra==='fioblack'){
                    idCapa= "de5603dc87e6455982fa14a435ec1f4a"
                }else if(layerEntra==='Industrial Metal'){////////////////////77
                    idCapa= ""
                }else if(layerEntra==='hardAlternative'){
                    idCapa= "66f186c783ca4157b494de6abcdf4ebb"
                }else if(layerEntra ==='metalCore'){
                    idCapa= "fb9ff39d51d649eda8c283b994764fe9"
                }else if(layerEntra==='deathMetal'){
                    idCapa= "f9042624d0434313b29e086c3e48df82"
                }else if(layerEntra==='Grindcore'){//////////////////////////77
                    idCapa= ""
                }else if(layerEntra==='blackMetal'){
                    idCapa= "19df22cca2e542639afca05486f9c5ce"
                }else if(layerEntra==='gothMetal'){
                    idCapa= "f70139478d7142a7821f2e384389acde"
                }else if(layerEntra==='nuMetal'){
                    idCapa= "b80528f8bab64b95b1c95bfbebf4c1aa"
                }else if(layerEntra==='Wave Of American Metal'){////////////////////777
                    idCapa= ""
                }else if(layerEntra==='Swedish Metal'){///////////////////////7
                    idCapa= ""
                }else if(layerEntra==='doomMetal'){
                    idCapa= "85bf5c0de06a46cfb96336d9fd47ebc1"
                }
            }

        // Cargar modulos que se utilizan en el api de javascript
        loadModules([
            "esri/Map",
            "esri/views/MapView",
            "esri/layers/FeatureLayer",
            "esri/widgets/Expand",
            "dojo/query",
            "dojo/aspect",
            "dojo/domReady!"
            ], options
        ).then(([Map, MapView, FeatureLayer, Expand, Legend, watchUtils, dojoQuery, aspect]) => {
            if(!(layerEntra ==='paises')){
                getIdcapa(layerEntra);
            }
            // Acceder y declarar las diferentes capas
            const paises = new FeatureLayer({
                portalItem: {
                    id: "386002785fae4ad19954ba3d580f851f"
                }
            });
            //se crea el FeatureLayer sin id asociado aun
            const capa = new FeatureLayer({
                portalItem:{
                    id:""
                }
            });
            //se le asocia el id al FeatureLayer con sus propiedades
            capa.portalItem.id = idCapa;
            //funcion que verifica si solo se ha pedido la capa de paises, que es con la que inicia el mapa
            function capasParaMapa(){
                if(layerEntra ==='paises'){
                    const mapa = new Map({
                        layers: [paises]
                    });
                    return mapa;
                }else{
                    const mapa = new Map({
                        layers: [paises,capa]
                    });
                    return mapa;
                }
            }
            var map = (capasParaMapa());
            // Crear vista del mapa
            var view = new MapView({
                map: map,
                center:[0,50],
                container: "viewDiv",
                ui: {
                    components: [ "attribution" ]
                }
            });

            // Popup Link event listener
            view.popup.on("trigger-action", function (event) {
              if (event.action.id === "pliWebsite") {
                  console.log("neaaaa");
              }
            });
            // view.goTo({
            //   target: capa,
            //   //zoom:
            //   //scale:
            // });
            // vistaMapa(view);
            // // Establecer donde inicia la vista
            // function vistaMapa(view){
            //      var extent = capa.when(function(){
            //       return capa.queryExtent();
            //     })
            //     .then(function(response){
            //         console.log("nea");
            //         target: event.result.feature,
            //     });
            //
            //
            // }
        });
        }
    },
    mounted() {
        this.createMap(0,0,0,'paises');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./metal.css">

</style>
