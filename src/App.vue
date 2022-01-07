<template>
  <v-app id="app">
    <v-app-bar flat color="blue lighten-4" app>
      <v-toolbar-title>스터디 출석부</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent app>
      <v-list-item @click="executeLogin">
        <v-list-item-icon>
          <v-icon>mdi-account</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-h6">Login</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-card height="400px" outlined class="overflow-auto grey lighten-5">
        <v-container>
          <router-view />
        </v-container>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mini: true,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' },
        { title: 'MyContents', icon: 'mdi-star-box-multiple-outline', to: '/myContents' },
        { title: 'About', icon: 'mdi-help-box', to: '/about' },
      ],
      drawer: true,
    };
  },
  methods: {
    executeLogin() {
      chrome.identity.getAuthToken({ interactive: true }, (token) => {
        console.log(token);
        const init = {
          method: 'GET',
          async: true,
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          contentType: 'json',
        };
        fetch(
          'https://people.googleapis.com/v1/contactGroups/all?maxMembers=20&key=AIzaSyAj7X9uscEhQum2FzATMe6aCkE',
          init,
        )
          .then((response) => response.json())
          .then(function (data) {
            console.log(data);
          });
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 600px;
  height: 400px;
}
</style>
