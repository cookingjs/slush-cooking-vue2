<template>
  <h1 class="hello">
    {{ msg }}
  </h1>
</template>

<script>
export default {
  name: 'hello',

  data() {
    return {
      msg: 'Hello Vue2.0'
    };
  }
};
</script>

<style lang="css" scoped>
  .hello {
    color: blue;
  }
</style>
