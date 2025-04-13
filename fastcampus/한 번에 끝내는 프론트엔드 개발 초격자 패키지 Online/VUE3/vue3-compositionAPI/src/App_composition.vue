<!-- 1. ref 반응형 데이터 -->
<!-- <template>
  <div @click="increase">
    {{ count }}
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    let count = ref(0)
    function increase() {
      count.value += 1
    }

    return {
      count,
      increase
    }
  }
}
</script> -->

<!-- 2. 기본 옵션과 라이프사이클 -->
<template>
  <h1 @click="increase">
    {{ count }} / {{ doubleCount }}
  </h1>
  <h1 @click="changeMessage">
    {{ message }} / {{ reversedMessage }}
  </h1>
</template>

<!-- <script>
export default {
  data() {
    return {
      count: 0,
      message: 'Hello world!'
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    },
    reversedMessage() {
      return this.message.split('').reverse().join('')
    }
  },
  watch: {
    message(newValue) {
      console.log(newValue)
    }
  },
  created() {
    console.log(this.message)
  },
  mounted() {
    console.log(this.count)
  },
  methods: {
    increase() {
      this.count += 1
    },
    changeMessage() {
      this.message = 'Good?!'
    }
  }
}
</script> -->

<script>
import { ref, computed, watch, onMounted } from 'vue'

export default {
  setup() { // created 라는 라이프사이클과 같다고 보면 됨 (onCreated 라이프 사이클은 존재하지 않는다.)
    const count = ref(0)
    const doubleCount = computed(() => {
      return count.value * 2
    })
    function increase() {
      count.value += 1
    }

    const message = ref('Hello world!')
    const reversedMessage = computed(() => {
      return message.value.split('').reverse().join('')
    })
    watch(message, newValue => {
      console.log(newValue)
    })
    function changeMessage() {
      message.value = 'Good!?'
    }
    console.log(message.value)

    onMounted(() => {
      console.log(count.value)
    })
    return {
      count,
      doubleCount,
      increase,
      message,
      reversedMessage,
      changeMessage
    }
  }
}
</script>