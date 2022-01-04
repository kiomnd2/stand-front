<template>
  <div>
    <p>{{ defaultText }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    defaultText() {
      return 'test!!';
    },
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
