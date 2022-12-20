<script setup lang="ts">
import { Button, Select } from 'zkdwui'
const onClick = () => {
  console.log('button-lerna');

}
</script>

<template>
  <Button msg="Vite + Vue" @onClick="onClick" />
  123
  <k-button msg="Vite + Vue" @onClick="onClick" />
  456
  <Select msg="Vite + Vue" @onClick="onClick" />

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
