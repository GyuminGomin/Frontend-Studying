<!-- 1. 폼 입력 바인딩 -->
<!-- v-model : 양방향 데이터 바인딩 (한글은 한박자 느리게 반영됨) -->
<!-- 따라서 한글은 :value="msg" @input="msg = $event.target.value" 사용 -->
<!--  
<template>
  <h1>{{ msg }}</h1>
  <input type="text"
  v-model="msg"/>
  <h1>{{ checked }}</h1>
  <input type="checkbox" v-model="checked" />
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello world!',
      checked: false
    }
  }
}
</script> -->

<!-- 2. v-model 수식어 -->
 <!-- :value="msg"
  @change="msg = $event.target.value"
  이거는 v-model.lazy -->
<template>
  <h1> {{ msg }}</h1>
  <input type="text"
  v-model.lazy.number = "msg" />

  <input type="text"
  v-model.trim = "msg" />
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello world!'
    }
  },
  watch: {
    msg() {
      console.log(this.msg)
    }
  }
}
</script>