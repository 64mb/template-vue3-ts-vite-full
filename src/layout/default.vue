<template>
  <div class="layout-default">
    <el-container>
      <el-header class="header">64MB TEAM</el-header>
      <el-main><slot /></el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts"></script>

<style>
  .header {
    font-size: 3.2em;
    font-weight: 700;
    line-height: 1.1;
    color: rgba(255, 255, 255, 0.87);
  }
</style>
