<template>
  <!-- <h1 v-once @click="add">{{ msg }}</h1>
  <h1 v-html="msg"></h1> -->
  <h1 :[attr]="'active'" @[event]="add">{{ msg }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'active', //'<div style="color: red;">Hello!!</div>'
      attr: 'class',
      event: 'click'
    }
  },
  methods: {
    add() {
      this.msg += '!'
    }
  }
}
</script>

<style scoped>
  .active {
    color: royalblue;
    font-size: 100px;
  }
</style>