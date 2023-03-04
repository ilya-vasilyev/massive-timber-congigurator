<script setup lang="ts">
import { useStore } from '@/store';
import Logo from '@/assets/creatomus-black-logo-text-vertical.png';
import SkullLogo from '@/assets/Skull-black.png';

useHead({
  title: 'Masstimber configurator',
});
const store = useStore();
</script>

<template>
  <main class="max-w-lg mx-auto my-16 text-center">
    <h1 class="font-display text-7xl mb-4 text-center">Mass<span class="text-accent">timber</span> CONFIGURATOR</h1>
    <p class="text-lg opacity-75">(((Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione dolorem earum labore.)))</p>

    <div class="flex justify-center gap-4 my-4">
      <img :src="SkullLogo" width="150" height="150" />
      <img :src="Logo" width="150" height="150" class="object-contain" />
    </div>

    <div class="divider" />
    <router-link :to="{ name: 'filter01' }" class="btn btn-primary">Get started</router-link>
  </main>
</template>

<route lang="yaml">
name: home
</route>
