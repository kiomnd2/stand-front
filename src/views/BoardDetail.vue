<template>
  <v-card class="mx-auto">
    <v-app-bar flat color="rgba(0, 0, 0, 0)">
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-0">
        {{ title }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed small color="primary" @click="isRegister = true">등록</v-btn>
    </v-app-bar>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    <v-card-text>
      <v-timeline dense>
        <v-slide-x-reverse-transition>
          <v-timeline-item v-if="isRegister" icon="mdi-plus" fill-dot color="red">
            <v-card outlined hidden>
              <v-card-text>
                <item-register></item-register>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-slide-x-reverse-transition>
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot
        >
          <v-expansion-panels v-model="item.panel" popout>
            <v-expansion-panel :class="item.color" class="white--text">
              <v-expansion-panel-header>
                {{ item.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <v-col cols="12">
                    <span>
                      주차 간단 설명설명주차 간단 설명설명주차 간단 설명설명주차 간단 설명설명주차
                      간단 설명설명주차 간단 설명설명주차 간단 설명설명주차 간단 설명설명주차 간단
                      설명설명주차 간단 설명설명
                    </span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <strong>작성 일시 : {{ item.regDate }}</strong>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <v-card outlined>
                  <v-card-text>
                    <v-list three-line v-for="(a, i) in item.attendants" :key="a.id">
                      <item-detail
                        :id="a.id"
                        :name="a.name"
                        :title="a.title"
                        :subtitle="a.subtitle"
                        :avatar="a.avatar"
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
import ItemRegister from '../components/ItemRegister';

export default {
  name: 'BoardDetail',
  components: { ItemRegister, ItemDetail },
  data() {
    return {
      title: '타이틀',
      subtitle: '서브타이틀',
      panel: [],
      isRegister: false,
      items: [
        {
          title: '타이틀1211111111111111111',
          color: 'red lighten-2',
          icon: 'mdi-star',
          regDate: '2022-01-01 11:10:25',
          panel: [],
          attendants: [
            {
              id: 'kiomnd2',
              name: '김똥개',
              subtitle: `좋기는 개뿔`,
              avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            },
            {
              id: 'kiomnd22',
              name: '김대빵',
              subtitle: `저런저런`,
              avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            },
            {
              id: 'kiomnd222',
              name: '김돌돌',
              subtitle: ``,
              avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            },
          ],
        },
        {
          title: '타이틀2',
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
          regDate: '2022-01-01',
          panel: [],
          attendants: [],
        },
        {
          title: '타이틀3',
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
          regDate: '2022-01-01',
          panel: [],
          attendants: [],
        },
      ],
    };
  },
  methods: {
    test() {
      alert('test');
    },
  },
};
</script>

<style scoped></style>
