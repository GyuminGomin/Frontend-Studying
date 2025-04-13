<!-- 1. 이벤트 핸들링 -->
<!-- <template>
  <button @click="handler('hi', $event)">
    Click 1
  </button>
  <button @click="handler('what', $event)">
    Click 2
  </button>
</template>

<script>
export default {
  methods: {
    handler(msg, event) {
      console.log(msg)
      console.log(event)
    }
  }
}
</script> -->

<!-- 이벤트핸들러를 여러개 사용할 경우 ()호출 괄호 필수 -->
<!-- <template>
  <button @click="handlerA(), handlerB()">
    Click me!
  </button>
</template>

<script>
export default {
  methods: {
    handlerA() {
      console.log('A')
    },
    handlerB() {
      console.log('B')
    }
  }
}
</script> -->

<!-- 2. event chaining -->
<!-- <template>
  <a href="https://naver.com"
  target="_blank"
  @click.prevent.once="handler">
  Naver</a>
</template>

<script>
export default {
  methods: {
    handler() {
      console.log('ABC!')
    }
  }
}
</script> -->

<!-- 3. 이벤트 버블링 -->
 <!-- click. capture: 순서, stop: 전파 방지, self: 정확한 클릭(자기자신을 정확히 클릭했을 때만) -->
  <!-- wheel: 휠 동작 -->
   <!-- wheel.passive: 사용자에게 쾌적한 서비스 공급 가능 -->
<!-- <template>
  <div
    class="parent"
    @wheel.passive="handler">
    <div
      class="child">
    </div></div>
</template>

<script>
export default {
  methods: {
    handlerA(event) {
      console.log(event.target)
      console.log(event.currentTarget)
      console.log('A')
    },
    handlerB() {
      console.log('B')
    },
    handler(event) {
      for (let i = 0; i < 10000; i += 1) {
        console.log(event)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .parent {
    width: 200px;
    height: 100px;
    background-color: royalblue;
    margin: 10px;
    padding: 10px;
    overflow: auto;
    .child {
      width: 100px;
      height: 2000px;
      background-color: orange;
    }
  }
</style> -->

<!-- 4. 이벤트 핸들링 (키 수식어) -->

<template>
  <input type="text" @keydown.ctrl.enter="handler" />
</template>

<script>
export default {
  methods: {
    handler() {
      console.log('Enter!!')
    }
  }
}
</script>