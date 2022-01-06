<template>
  <v-card outlined>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :counter="20"
          :rules="titleRules"
          label="타이틀"
          required
        ></v-text-field>

        <v-text-field
          v-model="description"
          :counter="50"
          :rules="descriptionRules"
          label="간단설명글"
          required
        ></v-text-field>
        <v-btn color="primary" @click="registerItem">등록</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'ItemRegister',
  data: () => ({
    valid: true,
    name: '',
    description: '',
    titleRules: [
      (v) => !!v || '타이틀은 필수 입니다.',
      (v) => (v && v.length <= 10) || '10자를 넘겨선 안됩니다.',
    ],
    descriptionRules: [(v) => (v && v.length <= 50) || '50자를 넘겨선 안됍니다.'],
  }),

  methods: {
    registerItem() {
      this.$refs.form.resetValidation();
    },
    registerCancel() {},
  },
};
</script>

<style scoped></style>
