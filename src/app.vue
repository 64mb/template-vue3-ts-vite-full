<template>
  <el-config-provider :locale="i18n.messages[i18n.locale].element">
    <Layout>
      <router-view />
    </Layout>
  </el-config-provider>
</template>

<script setup lang="ts">
  import { useI18n } from '~/i18n'
  import Layout from '~/layout/layout.vue'

  const { i18n } = useI18n()
</script>
