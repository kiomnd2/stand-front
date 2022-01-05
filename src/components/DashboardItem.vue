<template>
  <v-card outlined>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title v-text="title" class="text-h6"></v-list-item-title>
        <v-list-item-subtitle class="text--primary" v-text="headline"></v-list-item-subtitle>
        <v-list-item-subtitle v-text="subtitle"></v-list-item-subtitle>
        <v-list-item-subtitle align="right">
          <v-chip class="ml-0 mr-2 black--text" label small>
            <v-icon size="15">mdi-account</v-icon>
            <span>{{ currentJoiner }}/{{ maxJoiner }}</span>
          </v-chip>
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-icon>
        <v-btn class="mx-2" fab dark small color="primary" to="/detail">
          <v-icon dark>mdi-arrow-right-bold</v-icon>
        </v-btn>
      </v-list-item-icon>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: 'DashboardItem',
  props: {
    id: String,
    title: String,
    headline: String,
    subtitle: String,
    currentJoiner: String,
    maxJoiner: String,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
