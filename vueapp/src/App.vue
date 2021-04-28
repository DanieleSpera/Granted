<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="../src/assets/GrantedLogo.png"
          width="250"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="secondary">
      <GrantWriter/>
    </v-main>
  </v-app>
</template>

<script>
import GrantWriter from '@/components/GrantWriter.vue';

export default {
  name: 'App',

  components: {
    GrantWriter,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
  .v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){background:red}
  @media print {
      .v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {display: none !important;}
  }
</style>