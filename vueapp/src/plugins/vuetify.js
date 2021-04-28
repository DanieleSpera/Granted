import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
          customProperties: true
        },
        themes: {
          light: {
            primary: '#1B5E20',
            secondary: '#E8F5E9', 
            accent: '#8c9eff',
            error: '#B71C1C',
          },
        },
      },
});
