<template>
  <v-card class="mx-auto">
    <v-app-bar flat color="rgba(0, 0, 0, 0)">
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-0">{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    <v-card-text>
      <v-timeline align-top dense>
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot
        >
          <v-expansion-panels v-model="item.panel" popout>
            <v-expansion-panel :class="item.color" class="white--text">
              <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <span>서브 타이틀</span>
                <v-card outlined>
                  <v-card-text>
                    <v-list three-line v-for="(a, i) in item.attendants" :key="a.id">
                      <item-detail
                        :id="a.id"
                        :name="a.name"
                        :title="a.title"
                        :subtitle="a.subtitle"
                      ></item-detail>
                      <v-divider :key="i" v-if="i !== item.attendants.length - 1"></v-divider>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
import ItemDetail from '../components/ItemDetail';

export default {
  name: 'BoardDetail',
  components: { ItemDetail },
  data() {
    return {
      title: '타이틀',
      subtitle: '서브타이틀',
      panel: [],
      items: [
        {
          title: '타이틀1',
          color: 'red lighten-2',
          icon: 'mdi-star',
          panel: [],
          attendants: [
            {
              id: 'kiomnd2',
              name: '김똥개',
              subtitle: `좋기는 개뿔`,
            },
            {
              id: 'kiomnd22',
              name: '김대빵',
              subtitle: `저런저런`,
            },
            {
              id: 'kiomnd222',
              name: '김돌돌',
              subtitle: ``,
            },
          ],
        },
        {
          title: '타이틀2',
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
          panel: [],
        },
        {
          title: '타이틀3',
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
          panel: [],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
