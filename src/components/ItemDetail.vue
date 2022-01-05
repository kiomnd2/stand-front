<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <strong>{{ name }} ({{ id }})</strong>
        </v-list-item-title>
        <v-list-item-subtitle>
          <v-text-field
            @keydown="isModify = true"
            label="한줄평"
            hide-details="auto"
            :value="subtitle"
          >
            <v-icon v-if="isModify" @click="isModify = false" slot="append">mdi-check-bold</v-icon>
          </v-text-field>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-file-input accept=".doc,.docx,.pdf" label="작성 자료"></v-file-input>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: 'ItemDetail',
  props: {
    id: String,
    title: String,
    name: String,
    subtitle: String,
  },
  data() {
    return {
      isModify: false,
    };
  },
};
</script>

<style scoped></style>
