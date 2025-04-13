<!-- 1. Computed -->
<!-- <template>
  <Fruits />
</template>

<script>
import Fruits from '~/components/Fruits'
export default {
  components: {
    Fruits
  }
}
</script> -->

<!-- 2. Computed Cashing, GETTER, SETTER -->
<!-- <template>
  <button @click="add">ADD</button>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
  data() {
    return {
      // Getter, Setter
      msg: 'Hello Computed!'
    }
  },
  computed: { // 캐싱이라는 기능이 있어 다시 한번 연산하지 않는다! 중요! (그리고 읽기전용 반응성 x)
    // // Getter
    // reversedMessage() {
    //   return this.msg.split('').reverse().join('')
    // }
    reversedMessage: {
      get() {
        return this.msg.split('').reverse().join('')
      },
      set(newValue) {
        this.msg = newValue
      }
    }
  },
  methods: {
    // reverseMessage() {
    //   return this.msg.split('').reverse().join('')
    // },
    add() {
      this.reversedMessage += '!?'
      // this.msg += '!?'
    }
  }
}
</script> -->

<!-- 3. Watch -->
<!-- <template>
  <h1 @click="changeMessage">{{ msg }}</h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello?'
    }
  },
  computed: {
    reversedMessage() {
      return this.msg.split('').reverse().join('')
    }
  },
  watch: { // 특정 데이터 변경사항 감지
    msg(newValue) {
      console.log('msg:', newValue)
    },
    reversedMessage(newValue) {
      console.log('reversedMessage: ', newValue)
    }
  },
  methods: {
    changeMessage() {
      this.msg = 'Good!'
    }
  }
}
</script> -->

<!-- 4. 클래스와 스타일 바인딩 -->
<!-- <template>
  <h1 @click="activate" :class="{ active: isActive }">Hello?!({{ isActive }})</h1>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    activate() {
      this.isActive = true
    }
  }
}
</script>

<style scoped>
  .active {
    color: red;
    font-weight: bold;
  }
</style> -->

<template>
  <h1 :style="[fontStyle, backgroundStyle]" @click="changeStyle">
  Hello?!</h1>
</template>

<script>
export default {
  data() {
    return {
      fontStyle: {
        color: 'orange',
        fontSize: '30px'
      },
      backgroundStyle: {
        backgroundColor: 'black'
      }
    }
  },
  methods: {
    changeStyle() {
      this.fontStyle.color='red'
      this.fontStyle.fontSize = '50px'
    }
  }
}
</script>