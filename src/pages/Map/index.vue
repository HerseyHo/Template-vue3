<script setup>
import {onMounted, ref} from 'vue'
import * as Cesium from 'cesium'

//cesium初始化必须写在mounted生命周期里面，否则会报错"Element with id "cesiumContainer" does not exist in the document."
onMounted(() => {
  const viewer = new Cesium.Viewer('cesiumContainer', {
    //这里是配置项
  })
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>


<style scoped>
#cesiumContainer {
  width: 100vw;
  height: 100vh;
}
</style>