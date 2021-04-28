<template>
  <v-container>
    <v-sheet v-if="!completed" class="secondary">
      <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="company"
              label="Company Name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="name"
              label="Name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="role"
              label="Role"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="education"
              label="Education"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="hobbies"
              label="Hobbies"
              required
            ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="industry"
              label="Industry"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="elevatorpitch.mission"
              label="Mission"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="elevatorpitch.problem"
              label="Problem"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="elevatorpitch.solution"
              label="Solution"
              required
            ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-end">
          <v-btn
            @click="submitBiography"
            outlined
            color="primary"
          >
            Submit
          </v-btn>
        </v-col>
      </v-row>

      <h2>{{company}}</h2>
      
      <QuestionSlot 
        v-if="grantQuestions && grantQuestions.biography"
      >
        <template v-slot:title>Biography</template> 
        <template v-slot:actions>
          <v-btn icon color="primary" @click="updateBiography">
            <v-icon large color="primary">mdi-refresh</v-icon>
          </v-btn>
        </template> 
        <template v-slot:content>
           <v-textarea
            outlined
            name="input-7-4"
            label="Outlined textarea"
            :value="grantQuestions.biography"
            v-model="grantQuestions.biography"
          ></v-textarea>
        </template>
      </QuestionSlot>
      
      <QuestionSlot 
        v-if="grantQuestions && grantQuestions.elevatorpitch"
      >
        <template v-slot:title>Elevatorpitch</template> 
        <template v-slot:actions>
          <v-btn icon color="primary" @click="updateElevatorpitch">
            <v-icon large color="primary">mdi-refresh</v-icon>
          </v-btn>
        </template> 
        <template v-slot:content>
           <v-textarea
            outlined
            name="input-7-4"
            label="Outlined textarea"
            :value="grantQuestions.elevatorpitch"
            v-model="grantQuestions.elevatorpitch"
          ></v-textarea>
        </template>
      </QuestionSlot>
  
      <QuestionSlot 
        v-if="grantQuestions && grantQuestions.marketValue" 
      >
        <template v-slot:title>Market Value</template> 
        <template v-slot:actions>
          <v-btn icon color="primary" @click="updateMarketValue">
            <v-icon large color="primary">mdi-refresh</v-icon>
          </v-btn>
        </template> 
        <template v-slot:content>
           <v-textarea
            outlined
            name="input-7-4"
            label="Outlined textarea"
            :value="grantQuestions.marketValue"
            v-model="grantQuestions.marketValue"
          ></v-textarea>
        </template>
      </QuestionSlot>
  
      <QuestionSlot 
        v-if="grantQuestions && grantQuestions.marketChallenges" 
      >
        <template v-slot:title>Market Challenges</template> 
        <template v-slot:actions>
          <v-btn icon color="primary" @click="updateMarketChallenges">
            <v-icon large color="primary">mdi-refresh</v-icon>
          </v-btn>
        </template> 
        <template v-slot:content>
           <v-textarea
            outlined
            name="input-7-4"
            label="Outlined textarea"
            :value="grantQuestions.marketChallenges"
            v-model="grantQuestions.marketChallenges"
          ></v-textarea>
        </template>
      </QuestionSlot>
      <v-row v-if="edit">
        <v-col class="d-flex justify-center">
          <v-btn
            @click="complete"
            outlined
            color="primary"
          >
            Complete
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>

    <v-sheet class="secondary" v-if="completed">
      <h1>{{company}}</h1>
      <h2>Biograpy</h2>
      <v-row>
        <v-col>
          {{grantQuestions.biography}}
        </v-col>
      </v-row>
      <h2>Elevatorpitch</h2>
      <v-row>
        <v-col>
          {{grantQuestions.elevatorpitch}}
        </v-col>
      </v-row>
      <h2>Market Value</h2>
      <v-row>
        <v-col>
          {{grantQuestions.marketValue}}
        </v-col>
      </v-row>
      <h2>Market Challenges</h2>
      <v-row>
        <v-col>
          {{grantQuestions.marketChallenges}}
        </v-col>
      </v-row>
    </v-sheet>

    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>

  </v-container>
</template>

<script>
  import axios from 'axios';
  import QuestionSlot from '@/components/QuestionSlot.vue';


export default {
  name: 'GrantWriter',
  components: {
    QuestionSlot,
  },
  data(){
    return{
      company:    '',
      name:       '',
      education:  '',
      role:       '',
      hobbies:    '',
      industry:   '',
      elevatorpitch : {
        mission: "",
        problem: "",
        solution: "",
      },
      grantQuestions: {
      },
      completed : false,
      edit :false,
      overlay: false
    }
  },
  methods:{
    complete(){
      this.completed = true
    },
    submitBiography(){
      this.overlay = true
      const biography = {
        company:    this.company,
        name:       this.name,
        role:       this.role,
        education:  this.education,
        hobbies:    this.hobbies.split(','),
      }
      //  elevatorpitch = {"mission":"help musicians","problem":"music theory is complex","solution":"learning application with short lessons"}
      const elevatorpitch = {
          mission:  this.elevatorpitch.mission,
          problem:  this.elevatorpitch.problem,
          solution: this.elevatorpitch.solution,
        }
      axios
        .get('http://0.0.0.0:5000/',{
            params: {
              biography,
              elevatorpitch,
              industry : this.industry
            }
          }
        )
        .then(response => {
            console.log(response)
            this.grantQuestions = response.data
            this.edit = true
            this.overlay = false
          })
    },
    updateBiography(){
      this.overlay = true
      const biography = {
        name:       this.name,
        role:       this.role,
        education:  this.education,
        hobbies:    this.hobbies.split(','),
      }
      axios.get('http://0.0.0.0:5000/Biography',{params: {biography : biography}})
      .then( response => {
        this.grantQuestions.biography = response.data 
        this.overlay = false
      })
    },
    updateElevatorpitch(){
      this.overlay = true
      const elevatorpitch = {
        mission:  this.elevatorpitch.mission,
        problem:  this.elevatorpitch.problem,
        solution: this.elevatorpitch.solution,
      }
      axios.get('http://0.0.0.0:5000/Elevatorpitch',{params: {elevatorpitch : elevatorpitch}})
      .then( response => {
        this.grantQuestions.elevatorpitch = response.data 
        this.overlay = false
      })
    },
    updateMarketValue(){
      this.overlay = true
      axios.get('http://0.0.0.0:5000/MarketValue',{params: {industry : this.industry}})
      .then( response => {
        this.grantQuestions.marketValue = response.data 
        this.overlay = false
      })
    },
    updateMarketChallenges(){
      this.overlay = true
      axios.get('http://0.0.0.0:5000/MarketChallenges',{params: {industry : this.industry}})
      .then( response => {
        this.grantQuestions.marketChallenges = response.data 
        this.overlay = false
      })
    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
