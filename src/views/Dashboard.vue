<template>
  <v-row>
    <v-col cols="12">
      <v-list two-line v-for="item in items" :key="item.id">
        <dashboard-panel
          :id="item.id"
          :title="item.title"
          :headline="item.headline"
          :subtitle="item.subtitle"
          :current-joiner="1"
          :max-joiner="8"
        ></dashboard-panel>
        <v-divider></v-divider>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import DashboardPanel from '../components/DashboardPanel';

export default {
  name: 'Dashboard',
  components: { DashboardPanel },
  data() {
    return {
      items: [
        {
          id: 1,
          headline: 'Brunch this weekend?',
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: 'Ali Connors',
        },
      ],
    };
  },
};
</script>

<style></style>
