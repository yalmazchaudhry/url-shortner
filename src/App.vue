<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-icon class="mr-1">mdi-magnify-expand</v-icon>

       <h1>URL Shortner</h1>
      </div>

    </v-app-bar>

    <v-main>
      <urlShortner/>
    </v-main>
  </v-app>
</template>

<script>
import urlShortner from './components/urlShortner';

export default {
  name: 'App',

  components: {
    urlShortner,
  },

  data: () => ({
    //
  }),
};
</script>
