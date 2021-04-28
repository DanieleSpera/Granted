<template>
   <v-sheet class="secondary">
      <v-row>
        <v-col class="d-flex justify-space-between">
          <h2 ><slot name="title"></slot></h2>
          <slot name="actions"></slot>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="">
          <slot name="content"></slot>
        </v-col>
      </v-row>
   </v-sheet>
</template>

<script>
export default {
  name: 'QuestionSlot',

  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
