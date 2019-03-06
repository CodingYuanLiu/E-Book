<template>
  <div id="app" >
    <vheader/>
    <background></background>
  </div>
</template>

<script>
import BackGround from '@/components/BackGround/BackGround.vue'
import Header from '@/components/Header/Header.vue'
/* eslint-disable */
export default {
  name: 'App',
  components: {
    'background' :BackGround,
    'vheader' :Header
  }
}
</script>

