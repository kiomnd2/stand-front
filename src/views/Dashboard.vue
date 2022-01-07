<template>
  <v-row>
    <v-col cols="12">
      <v-list two-line v-for="item in items" :key="item.id" nav>
        <dashboard-panel
          :id="item.id"
          :title="item.title"
          :description="item.description"
          :joiner="1"
        ></dashboard-panel>
        <v-divider></v-divider>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import DashboardPanel from '../components/DashboardItem';

export default {
  name: 'Dashboard',
  components: { DashboardPanel },
  data() {
    return {
      items: [
        {
          id: 1,
          description: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: 'Ali Connors',
          joiner: 1,
        },
        {
          id: 2,
          description: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: 'Ali Connors',
          joiner: 1,
        },
        {
          id: 3,
          description: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: 'Ali Connors',
          joiner: 1,
        },
        {
          id: 4,
          description: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: 'Ali Connors',
          joiner: 1,
        },
      ],
    };
  },
};
</script>

<style></style>
