

<template>
  <button class="k-btn" @click="emit('onClick')">kSelect</button>
</template>

<script  lang="ts">
import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'kSelect',
  props: {
    msg: { type: String, },
  },
  // emits: ['onClick'],
  setup(props, { emit }) {
    console.log(props);
    // 返回值会暴露给模板和其他的选项式 API 钩子
    return {
      emit
    }
  },
})
</script>

<style scoped lang="less">
.k-btn {
  color: red;
}
</style>
