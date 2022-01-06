<template>
  <v-expansion-panels popout>
    <v-expansion-panel :class="color" class="white--text">
      <v-expansion-panel-header>
        {{ title }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col cols="12">
            <span>
              주차 간단 설명설명주차 간단 설명설명주차 간단 설명설명주차 간단 설명설명주차 간단
              설명설명주차 간단 설명설명주차 간단 설명설명주차 간단 설명설명주차 간단 설명설명주차
              간단 설명설명
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <strong>작성 일시 : {{ regDate }}</strong>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <v-card outlined>
          <v-card-text>
            <v-list three-line v-for="(a, i) in attendants" :key="a.id">
              <item-detail
                :id="a.id"
                :name="a.name"
                :subtitle="a.subtitle"
                :avatar="a.avatar"
                :filename="a.filename"
              ></item-detail>
              <v-divider :key="i" v-if="i !== attendants.length - 1"></v-divider>
            </v-list>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import ItemDetail from '../components/ItemDetail';

export default {
  name: 'DetailPanel',
  components: { ItemDetail },
  props: {
    title: String,
    color: String,
    panel: Array,
    regDate: String,
  },
  data() {
    return {
      attendants: [
        {
          id: 'kiomnd2',
          name: '김똥개',
          subtitle: '좋아좋아',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          filename: '과제2.txt',
        },
        {
          id: 'kiomnd21',
          name: '김박동',
          subtitle: '좋아좋아',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          filename: '과제1.txt',
        },
        {
          id: 'kiomnd22',
          name: '김죽음',
          subtitle: '좋아좋아',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          filename: '과제.txt',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
