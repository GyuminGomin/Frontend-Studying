<!-- 1. 컴포넌트 상속 -->
<!-- <template>
  <MyBtn class="heropy" style="color: red;" title="Hello world!">Banana</MyBtn>s
</template>

<script>
import MyBtn from '~/components/MyBtn'

export default {
  components: {
    MyBtn
  },
  data() {
    return {
      color: '#000'
    }
  }
}
</script> -->

<!-- 2. 컴포넌트 Emit -->
<!-- <template>
  <MyBtn @heropy="log" @change-msg="logMsg">Banana</MyBtn>
</template>

<script>
import MyBtn from '~/components/MyBtn'

export default {
  components: {
    MyBtn
  },
  methods: {
    log(event) {
      console.log('Click!!')
      console.log(event)
    },
    logMsg(msg) {
      console.log(msg)
    }
  }
}
</script> -->

<!-- 3. 컴포넌트 Slot -->
<!-- <template>
  <MyBtn>
    <template #icon><span>(B)</span></template>
    <template #text><span>Banana</span></template>
  </MyBtn>
</template>

<script>
import MyBtn from '~/components/MyBtn'

export default {
  components: {
    MyBtn
  }
}
</script> -->

<!-- 4. 컴포넌트 Provider, Inject -->
<!-- <template>
  <button @click="message = 'Good?'">
    Click!
  </button>
  <h1>App: {{ message }}</h1>
  <Parent />
</template>

<script>
import Parent from '~/components/Parent'
import { computed } from 'vue'

export default {
  components: {
    Parent
  },
  data() {
    return {
      message: 'Hello World!'
    }
  },
  provide() {
    return {
      msg: computed(() => (this.message))
    }
  }
}
</script> -->

<!-- 5. 컴포넌트 Refs -->
<template>
  <Hello ref="hello" />
</template>

<script>
import Hello from '~/components/Hello'

export default {
  components: {
    Hello
  },
  mounted() {
    console.log(this.$refs.hello.$refs.good);
  }
}
</script>