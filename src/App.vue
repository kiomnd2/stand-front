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
          <v-list-item-title v-if="!isLogin" class="text-h6">Login</v-list-item-title>
          <v-list-item-title v-else>{{ name }}님 반갑습니다.</v-list-item-title>
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
        <v-container v-if="isLogin">
          <router-view />
        </v-container>
        <v-container v-else>
          <div class="text-center">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </div>
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
      isLogin: false,
      id: '',
      username: '',
      email: '',
      photoUrl: '',
      userKey: '',
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
          `https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses&key=${API_KEY}`,
          init,
        )
          .then((response) => response.json())
          .then((profile) => {
            console.log(profile);
            // 이름
            this.name = profile.names[0].displayName;
            this.email = profile.emailAddresses[0].value;
            this.id = profile.emailAddresses[0].metadata.source.id;

            console.log(this.id);
            const { resourceName } = profile;
            fetch(
              `https://people.googleapis.com/v1/${resourceName}?personFields=photos&key=${API_KEY}`,
              init,
            )
              .then((response) => response.json())
              .then((photo) => {
                console.log(photo);
                this.photoUrl = photo.photos[0].url;
                this.isLogin = true;
                this.$router.push('/dashboard');
              });
          });
      });
    },
  },
  created() {
    this.executeLogin();
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
