<template>
  <v-app>
    <v-toolbar app v-if="this.$route.path != '/'">
      <v-toolbar-title class="headline text-uppercase">
        <span>Issue</span>
        <span class="font-weight-light">Track</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      {{userGetter.login}}<br>
      {{userGetter.repos}}
      <v-btn color="red" dark @click="logoutAction()">Exit</v-btn>
    </v-toolbar>
    <v-content>
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'App',
    data () {
        return {
        }
    },
    computed:{
        ...mapGetters({
            userGetter: 'github/userGetter',
        }),
    },
    mounted(){
    },
    methods: {
        ...mapActions({
            logoutAction: 'github/logoutAction',
        }),
    }
}
</script>
