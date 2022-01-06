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
      <div v-for="(a, i) in attendants" :key="a.id">
        <v-avatar v-if="i < 2" color="grey darken-3">
          <v-img class="elevation-3" alt="" :src="a.avatar"></v-img>
        </v-avatar>
        <v-avatar v-else-if="i === 2" color="blue lighten-5">
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-avatar>
      </div>
    </v-app-bar>

    <v-card-actions>
      <v-list-item>
        <v-list-item-content>
          {{ subtitle }}
        </v-list-item-content>
        <v-spacer></v-spacer>
        <v-btn v-if="!isRegister" depressed small color="primary" @click="isRegister = true">
          <span>등록</span>
        </v-btn>
        <v-btn
          v-if="isRegister"
          class="text--white"
          depressed
          small
          color="red"
          @click="isRegister = false"
        >
          <span class="text--white">등록취소</span>
        </v-btn>
      </v-list-item>
    </v-card-actions>

    <v-card-text>
      <v-timeline dense>
        <v-slide-x-reverse-transition>
          <v-timeline-item v-if="isRegister" icon="mdi-plus" fill-dot color="red">
            <item-register></item-register>
          </v-timeline-item>
        </v-slide-x-reverse-transition>
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot
        >
          <detail-panel
            :color="item.color"
            :title="item.title"
            :regDate="item.regDate"
            :panel="panel"
          ></detail-panel>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
import ItemRegister from '../components/ItemRegister';
import DetailPanel from './DetailPanel';

export default {
  name: 'BoardDetail',
  components: { DetailPanel, ItemRegister },
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
        },
        {
          title: '타이틀2',
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
          regDate: '2022-01-01',
          panel: [],
        },
        {
          title: '타이틀3',
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
          regDate: '2022-01-01',
          panel: [],
        },
      ],
      attendants: [
        {
          id: 'kiomnd2',
          name: '김똥개',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        },
        {
          id: 'kiomnd22',
          name: '김대빵',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        },
        {
          id: 'kiomnd222',
          name: '김돌돌',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
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
