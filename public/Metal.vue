<template>
    <div class="container">
        <div id="containerMapa">
            <div  class="row">
                <div class="col-9">
                    <div id="viewDiv" class="h-100"></div>
                </div>
                <div class="col-3 alto">
                    <div>
                      </div>
                      <div class="card-body">
                        <h3 class="card-header text-center">{{titulo}}</h3>
                        <h5 class="card-title">Descripción</h5>
                        <p class="card-text">{{desc}}</p>
                        <h5 class="card-title">Influencias</h5>
                        <p class="card-text">{{influencia}}</p>
                      </div>
                    <h3 class="text-center card-header"><a href="#" class="btn btn-primary">Escucha</a></h3>
                </div>
            </div>
        </div>
        <div id="containerBotones">
            <div class="row">
                <div class="col-2">
                    <!--espacio vacio para maquetado-->
                    <label v-on:click="titulo='Pre-Metal';mostrarDescripción();
                    createMap(-74,4,5,'preMetal')" type="label" class=" badge ">
                    <img class="iconoGenero" src="../assets/pines_metal-26.png">Pre-Metal</label>
                </div>
                <div class="col-2">
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
                        <li><label v-on:click="titulo='Shock Rock';mostrarDescripción()
                        " type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-11.png">Shock Rock</label></li>
                        <li><label v-on:click="titulo='Punk';mostrarDescripción();
                        createMap(0,0,0,'originalPunk')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-09.png">Punk</label></li>
                    </ul>
                </div>
                <div class="col-2">
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
                <div class="col-2">
                    <!--espacio vacio para maquetado-->
                    <ul>
                        <li><label v-on:click="titulo='Doom Metal';mostrarDescripción()
                        " type="label" class=" badge ">
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
                        <li><label v-on:click="titulo='Fisrt Wave Of Black Metal';mostrarDescripción()
                        " type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-02.png">F.W.Black Metal</label></li>
                        <li><label v-on:click="titulo='Industrial Metal';mostrarDescripción()
                        " type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-05.png">Industrial Metal</label></li>
                    </ul>
                </div>
                <div class="col-2">
                    <!--espacio vacio para maquetado-->
                    <ul>
                        <li><label v-on:click="titulo='Hard Alternative';mostrarDescripción()
                        " type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-12.png">Hard Alternative</label></li>
                        <li><label v-on:click="titulo='MetalCore';mostrarDescripción();
                        createMap(0,0,0,'metalCore')" type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-22.png">Metalcore</label></li>
                        <li><label v-on:click="titulo='Death Metal';mostrarDescripción()
                        " type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-17.png">Death Metal</label></li>
                        <li><label v-on:click="titulo='Grindcore';mostrarDescripción()
                        " type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-01.png">Grindcore</label></li>
                        <li><label v-on:click="titulo='Black Metal';mostrarDescripción()
                        " type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-03.png">Black Metal</label></li>
                    </ul>
                </div>
                <div class="col-2">
                    <!--espacio vacio para maquetado-->
                    <ul>
                        <li><label v-on:click="titulo='Goth Metal';mostrarDescripción()
                        " type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-05.png">Goth Metal</label></li>
                        <li><label v-on:click="titulo='Nu Metal';mostrarDescripción()
                        " type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-29.png">Nu Metal</label></li>
                        <li><label v-on:click="titulo='Wave Of American Metal';mostrarDescripción()
                        " type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-28.png">N.W.American Metal</label></li>
                        <li><label v-on:click="titulo='Swedish Metal';mostrarDescripción()
                        " type="label" class=" badge ">
                        <img class="iconoGenero" src="../assets/pines_metal-18.png">Swedish Metal</label></li>
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
            capa:''
        }
    },
    methods:{
        mostrarDescripción: function(){
            if(this.titulo==='Pre-Metal'){
                this.desc = 'descripcion de pre metal'
            }else if(this.titulo==='Progressive Rock'){
                this.desc = 'descripcion Rock'
            }else if(this.titulo==='Early Metal U.S.'){
                this.desc = 'descripcion Early Metal U.S.'
            }else if(this.titulo==='Early Metal U.k.'){
                this.desc = 'descripcion Early Metal U.k.'
            }else if(this.titulo==='Shock Rock'){
                this.desc = 'descripcion Shock Rock'
            }else if(this.titulo==='Punk'){
                this.desc = 'descripcion Punk'
            }else if(this.titulo==='Progressive Metal'){
                this.desc = 'descripcion Progressive Metal'
            }else if(this.titulo==='Power Metal'){
                this.desc = 'descripcion Power Metal'
            }else if(this.titulo==='New Wave Of British Heavy Metal'){
                this.desc = 'descripcion New Wave Of British Heavy Metal'
            }else if(this.titulo==='HardCore'){
                this.desc = 'descripcion HardCore'
            }else if(this.titulo==='Doom Metal'){
                this.desc = 'descripcion Doom Metal'
            }else if(this.titulo==='Glam Metal/Hard Rock'){
                this.desc = 'descripcion Glam Metal/Hard Rock'
            }else if(this.titulo==='Grunge'){
                this.desc = 'descripcion Grunge'
            }else if(this.titulo==='Thrash Metal'){
                this.desc = 'descripcion Thrash Metal'
            }else if(this.titulo==='Fisrt Wave Of Black Metal'){
                this.desc = 'descripcion Fisrt Wave Of Black Metal'
            }else if(this.titulo==='Industrial Metal'){
                this.desc = 'descripcion Industrial Metal'
            }else if(this.titulo==='Hard Alternative'){
                this.desc = 'descripcion Hard Alternative'
            }else if(this.titulo==='MetalCore'){
                this.desc = 'descripcion HMetalCore'
            }else if(this.titulo==='Death Metal'){
                this.desc = 'descripcion Death Metal'
            }else if(this.titulo==='Grindcore'){
                this.desc = 'descripcion Grindcore'
            }else if(this.titulo==='Black Metal'){
                this.desc = 'descripcion Black Metal'
            }else if(this.titulo==='Goth Metal'){
                this.desc = 'descripcion Goth Metal'
            }else if(this.titulo==='Nu Metal'){
                this.desc = 'descripcion Nu Metal'
            }else if(this.titulo==='Wave Of American Metal'){
                this.desc = 'descripcion Wave Of American Metal'
            }else if(this.titulo==='Swedish Metal'){
                this.desc = 'descripcion Swedish Metal'
            }
        },
        createMap: function(long,lat,zoo,layerEntra) {
            var idCapa='';
            getIdcapa();
            const options = {
            url: "https://js.arcgis.com/4.8/"
            };

        // Cargar modulos que se utilizan en el api de javascript
        loadModules([
            "esri/Map",
            "esri/views/MapView",
            "esri/layers/FeatureLayer",
            "esri/widgets/Expand",
            "esri/widgets/Legend",

            "esri/core/watchUtils",
            "dojo/query",
            "dojo/aspect",
            "dojo/domReady!"
            ], options
        ).then(([Map, MapView, FeatureLayer, Expand, Legend, watchUtils, dojoQuery, aspect]) => {
            // Acceder y declarar las diferentes capas
            const paises = new FeatureLayer({
                portalItem: {
                    id: "386002785fae4ad19954ba3d580f851f"
                }
            });
            function getIdcapa(){
                if(layerEntra==='preMetal'){
                    idCapa= "aace738283d448e1912dd6cf16f6b28f"
                    console.log(idCapa);
                }else if(layerEntra ==='rockProg'){
                    idCapa= "4840218a7acf48ab86b5443012bc11e4"
                }else if(layerEntra ==='earlyMetalUS'){
                    idCapa= "b481595fb24d4cd79e53c23a9921e2db"
                }else if(layerEntra ==='earlyMetalUK'){
                    idCapa= "d7a7d56aa62142ea9847a9240f8897e1"
                }else if(layerEntra === 'shockRock'){
                    idCapa= ""
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
                    idCapa= ""
                }else if(layerEntra==='Glam Metal/Hard Rock'){
                    idCapa= "0c6b9b033583498d90cf4169744682e8"
                }else if(layerEntra ==='grunge'){
                    idCapa= "efbe12d177bd4bbab19f2877200ab9b7"
                }else if(layerEntra ==='thrash'){
                    idCapa= "494429f428d045afae99c379eda5e25c"
                }else if(layerEntra==='Fisrt Wave Of Black Metal'){
                    idCapa= ""
                }else if(layerEntra==='Industrial Metal'){
                    idCapa= ""
                }else if(layerEntra==='Hard Alternative'){
                    idCapa= ""
                }else if(layerEntra ==='metalCore'){
                    idCapa= "fb9ff39d51d649eda8c283b994764fe9"
                }else if(layerEntra==='Death Metal'){
                    idCapa= ""
                }else if(layerEntra==='Grindcore'){
                    idCapa= ""
                }else if(layerEntra==='Black Metal'){
                    idCapa= ""
                }else if(layerEntra==='Goth Metal'){
                    idCapa= ""
                }else if(layerEntra==='Nu Metal'){
                    idCapa= ""
                }else if(layerEntra==='Wave Of American Metal'){
                    idCapa= ""
                }else if(layerEntra==='Swedish Metal'){
                    idCapa= ""
                }
            }
            function createCapa(idCapa){
                const capa = new FeatureLayer({
                    portalItem:{
                        id:idCapa
                    }
                });
                return capa;
            }


            // const preMetal = new FeatureLayer({
            //     portalItem: {
            //         id: "aace738283d448e1912dd6cf16f6b28f"
            //     }
            // });
            //
            // const rockProg = new FeatureLayer({
            //     portalItem: {
            //         id: "4840218a7acf48ab86b5443012bc11e4"
            //     }
            // });
            //
            // const earlyMetalUS = new FeatureLayer({
            //     portalItem: {
            //         id: "b481595fb24d4cd79e53c23a9921e2db"
            //     }
            // });
            // const earlyMetalUK = new FeatureLayer({
            //     portalItem: {
            //         id: "d7a7d56aa62142ea9847a9240f8897e1"
            //     }
            // });
            // const originalPunk = new FeatureLayer({
            //     portalItem: {
            //         id: "93dd57df72934870bf7607394042ac04"
            //     }
            // });
            // const progMetal = new FeatureLayer({
            //     portalItem: {
            //         id: "53d2580e857d44e89ef571875e2be886"
            //     }
            // });
            // const powerMetal = new FeatureLayer({
            //     portalItem: {
            //         id: "41f8f4fcb9a048869a1f5f5566417581"
            //     }
            // });
            // const nwobhm = new FeatureLayer({
            //     portalItem: {
            //         id: "874e5b890e9b485fb818ce3454d04410"
            //     }
            // });
            // const hardcore = new FeatureLayer({
            //     portalItem: {
            //         id: "cd63f62b6a6d4c5397956d51899ce752"
            //     }
            // });
            // const glamhardrock = new FeatureLayer({
            //     portalItem: {
            //         id: "0c6b9b033583498d90cf4169744682e8"
            //     }
            // });
            // const grunge = new FeatureLayer({
            //     portalItem: {
            //         id: "efbe12d177bd4bbab19f2877200ab9b7"
            //     }
            // });
            // const thrash = new FeatureLayer({
            //     portalItem: {
            //         id: "494429f428d045afae99c379eda5e25c"
            //     }
            // });
            // const metalCore = new FeatureLayer({
            //     portalItem: {
            //         id: "fb9ff39d51d649eda8c283b994764fe9"
            //     }
            // });

            // function compararNombres(){
            //     if(layerEntra ==='paises'){
            //         // Crear mapa
            //         const mapa = new Map({
            //             //layers: [paises, coberturaDpto, estacionesEnergia1]
            //             layers: [paises],
            //             capaActiva: paises
            //         });
            //         return mapa;
            //     }else if(layerEntra==='preMetal'){
            //         // Crear mapa
            //         const mapa = new Map({
            //             //layers: [paises, coberturaDpto, estacionesEnergia1]
            //             layers: [paises,preMetal],
            //             capaActiva: preMetal
            //         });
            //         return mapa;
            //     }else if(layerEntra ==='rockProg'){
            //         // Crear mapa
            //         const mapa = new Map({
            //             //layers: [paises, coberturaDpto, estacionesEnergia1]
            //             layers: [paises,rockProg]
            //         });
            //         return mapa;
            //     }else if(layerEntra ==='earlyMetalUS'){
            //         // Crear mapa
            //         const mapa = new Map({
            //             //layers: [paises, coberturaDpto, estacionesEnergia1]
            //             layers: [paises,earlyMetalUS]
            //         });
            //         return mapa;
            //     }else if(layerEntra ==='earlyMetalUK'){
            //         // Crear mapa
            //         const mapa = new Map({
            //             //layers: [paises, coberturaDpto, estacionesEnergia1]
            //             layers: [paises,earlyMetalUK]
            //         });
            //         return mapa;
            //     }
            //     else if(layerEntra ==='originalPunk'){
            //         // Crear mapa
            //         const mapa = new Map({
            //             //layers: [paises, coberturaDpto, estacionesEnergia1]
            //             layers: [paises,originalPunk]
            //         });
            //         return mapa;
            //     }else if(layerEntra ==='progMetal'){
            //         // Crear mapa
            //         const mapa = new Map({
            //             //layers: [paises, coberturaDpto, estacionesEnergia1]
            //             layers: [paises,progMetal]
            //         });
            //         return mapa;
            //     }
            //     else if(layerEntra ==='powerMetal'){
            //         // Crear mapa
            //         const mapa = new Map({
            //             //layers: [paises, coberturaDpto, estacionesEnergia1]
            //             layers: [paises,powerMetal]
            //         });
            //         return mapa;
            //     }else if(layerEntra ==='nwobhm'){
            //         // Crear mapa
            //         const mapa = new Map({
            //             //layers: [paises, coberturaDpto, estacionesEnergia1]
            //             layers: [paises,nwobhm]
            //         });
            //         return mapa;
            //     }else if(layerEntra ==='hardcore'){
            //         // Crear mapa
            //         const mapa = new Map({
            //             //layers: [paises, coberturaDpto, estacionesEnergia1]
            //             layers: [paises,hardcore]
            //         });
            //         return mapa;
            //     }
            //     else if(layerEntra ==='glamhardrock'){
            //         // Crear mapa
            //         const mapa = new Map({
            //             //layers: [paises, coberturaDpto, estacionesEnergia1]
            //             layers: [paises,glamhardrock]
            //         });
            //         return mapa;
            //     }else if(layerEntra ==='grunge'){
            //         // Crear mapa
            //         const mapa = new Map({
            //             //layers: [paises, coberturaDpto, estacionesEnergia1]
            //             layers: [paises,grunge]
            //         });
            //         return mapa;
            //     }else if(layerEntra ==='thrash'){
            //         // Crear mapa
            //         const mapa = new Map({
            //             //layers: [paises, coberturaDpto, estacionesEnergia1]
            //             layers: [paises,thrash]
            //         });
            //         return mapa;
            //     }else if(layerEntra ==='metalCore'){
            //         // Crear mapa
            //         const mapa = new Map({
            //             //layers: [paises, coberturaDpto, estacionesEnergia1]
            //             layers: [paises,metalCore]
            //         });
            //         return mapa;
            //     }
            //
            // }
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
            const map = (capasParaMapa());
            // Crear vista del mapa
            const view = new MapView({
                map: map,
                container: "viewDiv",
                ui: {
                    components: [ "attribution" ]
                }
            });
            // Establecer donde inicia la vista
            view.center = [0,50];  // logitud y latitud de donde se empieza a ver
            view.zoom = 2;  // zoom a 5
            //view.goTo(capaActiva.fullExtent);
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
