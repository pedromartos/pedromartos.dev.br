<script setup lang="ts">
import { useOneSignal } from '@onesignal/onesignal-vue3';
import { onMounted } from 'vue';

const oneSignal = useOneSignal();

onMounted(() => {
  oneSignal.Slidedown.promptPush();
});
</script>

<template>
  <main>
    <h1>Hello world</h1>

    <div class="onesignal-customlink-container"></div>
  </main>
</template>

<style lang="scss" scoped></style>
