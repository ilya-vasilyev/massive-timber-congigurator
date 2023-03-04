<script setup lang="ts">
import { useStore } from '@/store';
import VitailseLogo from '@/assets/logo.png';
useHead({
  title: 'Masstimber configurator',
});
// const store = useStore();
</script>

<template>
  <main class="max-w-lg mx-auto my-32 text-center">
    <h1 class="font-display text-4xl mb-8">Masstimber configurator</h1>
    <!-- <button @click="store.$state.count++" class="btn btn-primary mb-4">
      Count : {{ store.$state.count }}
    </button> -->

    <router-link :to="{ name: 'filter01' }" class="btn btn-primary">Get started</router-link>
  </main>
</template>

<route lang="yaml">
name: home
</route>
