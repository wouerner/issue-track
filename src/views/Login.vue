<template>
    <div>
        <v-container>
        <v-layout
            column
            wrap
            align-center
            justify-center
        >
            <div>
                <span>Issue</span>
                <span class="font-weight-light">Track</span>
            </div>
                <v-flex xs6 sm6 md3>
                    <v-text-field
                        label="Login"
                        placeholder="Placeholder"
                        outline
                        v-model="login"
                        ></v-text-field>
                </v-flex>
                <v-flex xs6 sm6 md3>
                    <v-text-field
                        label="senha"
                        placeholder="Placeholder"
                        outline
                        v-model="password"
                        ></v-text-field>
                </v-flex>
                <v-flex xs6 sm6 md3>
                    <v-text-field
                        label="Respositorio"
                        placeholder="Placeholder"
                        outline
                        v-model="repos"
                        ></v-text-field>
                </v-flex>
                <v-btn
                    color="success"
                    @click="loginUser()" >
                    Login
                </v-btn>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Login',
  data() {
      return {
        login:'',
        password:'',
        repos:'wouerner/job-vacancies',
      }
  },
  methods: {
    ...mapActions({
      loginAction: 'github/loginAction',
    }),
    loginUser() {
        this.loginAction({login: this.login, password: this.password, repos: this.repos});
    }
  }
}
</script>
