<template>
  <div >
  <v-container style="min-height:200px;" fluid class="blue-grey darken-4">
    <v-row  class="text-center">
      <v-col  class="col-12 mt-4">
        
        <h1 class="white--text ">Paste the URL to be shortened</h1>
        <form @submit.prevent>
        
      <input type="url" @change="getURL(url)" placeholder="Your long URL" v-model="url" />
      <v-btn
              color="warning"
              dark
              :loading="loading"
              :disabled="loading"
                    class="ml-2"
              
              @click="getURL(url)"
            >
              Shrink
            </v-btn>
    </form>
    <div class="mt-4 mb-8" v-show="getShortURl">
      
      <span class="mr-2 white--text" >Shortened URL :</span> 
    <a  target="_blank" ref="copyText" :href="getShortURl" class="lime--text text-decoration-none">{{ getShortURl }}</a>
   <v-tooltip right >
    <template v-slot:activator="{ on, attrs }">
 <v-icon 
 @click="copyText(),snackbar=true,copy='copied'"
 color="grey"
 v-bind="attrs"
v-on="on" 
class="ml-4">
mdi-content-copy
</v-icon>
</template>
<span>{{ copy }}</span>
</v-tooltip>
  </div>
</v-col>  
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      min-width="20px"
      min-height="2px"
      class="text-center"
    >
      <p class="text-center">copied!</p> 
    </v-snackbar>
    
    <v-snackbar
      v-model="clip"
      :timeout="timeout"
      min-width="20px"
      min-height="2px"
      
      class="text-center"
    >
      <p class="text-center">copied to clipboard</p> 
    </v-snackbar>
      <v-col class="col-12">
        <div class="d-flex justify-center" v-if="err==true"> <v-alert
    
  text
  dismissible
  type="error"
  max-width=200
  
>Invalid URL</v-alert></div>
       
        <div  class="d-flex flex-wrap justify-center">
          <div style="max-width: 300px;" class="d-flex flex-column align-center ma-3">
          <v-icon color="blue" large>mdi-thumb-up</v-icon>
          <p class=" font-weight-bold ma-0">Easy</p>
          <p class="text-caption text-justify ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem excepturi odit corporis beatae.</p>
        </div>
        <div style="max-width: 300px;" class="d-flex flex-column  ma-3 align-center">
          <v-icon color="#FFFF00" large>mdi-link-variant</v-icon>
          <p class="ma-0 font-weight-bold">Shortened</p>
          <p class="text-caption text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem excepturi odit corporis beatae.</p>
        </div>
        <div style="max-width: 300px;" class="d-flex flex-column  ma-3 align-center">
          <v-icon color="#FF5722" large>mdi-lock</v-icon>
          <p class="ma-0 font-weight-bold ">Secure</p>
          <p class="text-caption text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem excepturi odit corporis beatae.</p>
        </div>
        <div style="max-width: 300px;" class="d-flex flex-column  ma-3 align-center">
          <v-icon large color="green" >mdi-chart-box</v-icon>
          <p class="ma-0 font-weight-bold">Statistics</p>
          <p class="text-caption text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem excepturi odit corporis beatae.</p>
        </div>
        <div style="max-width: 300px;" class="d-flex flex-column  ma-3 align-center">
          <v-icon large color="#0091EA">mdi-charity</v-icon>
          <p class="ma-0 font-weight-bold">Reliable</p>
          <p class="text-caption text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem excepturi odit corporis beatae.</p>
        </div>
        <div style="max-width: 300px;" class="d-flex flex-column  ma-3 align-center">
          <v-icon large color="teal">mdi-cellphone-link</v-icon>
          <p class="ma-0 font-weight-bold">Devices</p>
          <p class="text-caption text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem excepturi odit corporis beatae.</p>
        </div>

        </div>
      </v-col>
    </v-row>
  </v-container></div>
</template>

<script>
import { store } from '@/store'

  export default {
    name: 'urlShortner',
    data(){
      return{
        url:'',
        timeout:2000,
        snackbar: false,
        copy:"copy",
        
       
    } 
    },
  

    computed:{
    getShortURl(){

      return store.state.url
    },
    clip(){
      return store.state.clip
    },
    loading(){
      return store.state.loading
    },
    err(){
      return store.state.err
    },

    },
    methods:{
      getURL(url){
        store.dispatch("getURL", url)
      },
      copyText() {
        var Url = this.$refs.copyText;
        
        navigator.clipboard.writeText(Url);
    }

    }
   
  }
</script>
<style>
input{
  font-size: 1.1rem;
      width: 65%;
      height: 40px;
      padding: 8px;
      border-radius: 7px;
      background: white;
      
}
input:focus {
        outline: 0;
      }
</style>