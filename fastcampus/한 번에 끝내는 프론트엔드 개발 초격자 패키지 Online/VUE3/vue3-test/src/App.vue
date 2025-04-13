<!-- <template>
  <h1 @click="increase">
    {{ count }}
  </h1>
  <div v-if="count > 4">
    4보다 큽니다!
  </div>
  <ul>
    <Fruit v-for="fruit in fruits" :key="fruit" :name="fruit">
      {{ fruit }}
    </Fruit>
  </ul>
</template>

<script>
import Fruit from '~/components/Fruit'

export default {
  components: {
    Fruit
  },
  data() {
    return {
      count: 0,
      fruits: ['Apply', 'Banana', 'Cherry']
    }
  },
  methods: {
    increase() {
      this.count += 1
    }
  }
}
</script>

<style lang="scss">
  h1 {
    font-size: 50px;
    color: royalblue;
  }
  ul {
    li {
      font-size: 40px;
    }
  }
</style> -->

<!-- 1. 조건부 렌더링 -->
 <!-- 최상위 템플릿은 조건부가 v-if, v-show 적용안됨 -->
  <!-- v-show는 개발자 도구에서 구조적으로 렌더링 됨, v-if는 렌더링되지 않아서 토글 비용이 큼 -->
<!--
<template> 
  <button @click="handler">
    Click me!
  </button>
  1. v-if, v-else, v-else-if
  <h1 v-if="isShow">
    Hello?!
  </h1>
  <h1 v-else-if="count > 3">
    Count > 3
  </h1>
  <h1 v-else>
    Good~
  </h1>
  2. v-if의 template
  <template v-if="isShow">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
  3. v-show
  <h1 v-show="isShow"> 
    Hello?!
  </h1>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      count: 0
    }
  },
  methods: {
    handler() {
      this.isShow = !this.isShow
      this.count += 1
    }
  }
}
</script>
-->

<!-- 2. 리스트 렌더링 -->
<!-- <template>
  <button @click="handler">
    Click me!
  </button>
  <ul>
    <li v-for="{ id, name } in newFruits" :key="id">{{ name }}-{{ id }}</li>
  </ul>
</template>

<script>
import shortid from 'shortid'

export default {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Cherry']
    }
  },
  computed: {
    newFruits() {
      return this.fruits.map(fruit => ({
          id: shortid.generate(),
          name: fruit
      }))
    }
  },
  methods: {
    handler() {
      this.fruits.push('Orange')
    }
  }
}
</script> -->

