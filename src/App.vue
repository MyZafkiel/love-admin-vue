<script setup lang="ts">
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider :locale="localeZH">
    <router-view />
  </el-config-provider>
</template>

<style>
body {
  margin: 0px;
}
</style>
