<script setup lang="ts">
import CompareOverlay from '@/components/CompareOverlay.vue';
import { useStore } from '@/store';
useHead({
  title: 'Masstimber configurator',
});
const store = useStore();
</script>

<template>
  <main class="max-w-5xl mx-auto my-16 text-center">
    <h1 class="font-display text-4xl text-center mb-16">Results</h1>

    <div class="grid grid-cols-3 auto-rows-auto">
      <section class="col-span-2">
        <div class="w-full aspect-[16/9] bg-secondary rounded-lg mb-8" />
        <div class="stats stats-vertical lg:stats-horizontal w-full shadow-lg border-2 border-base-300 my-8">
          <div class="stat">
            <div class="stat-title">Downloads</div>
            <div class="stat-value">31K</div>
            <div class="stat-desc">Jan 1st - Feb 1st</div>
            <div class="stat-figure text-secondary">
              <mdi-house class="w-10 h-10" />
            </div>
          </div>
          <div class="stat">
            <div class="stat-title">New Users</div>
            <div class="stat-value">4,200</div>
            <div class="stat-desc">↗︎ 400 (22%)</div>
            <div class="stat-figure text-secondary">
              <mdi-house class="w-10 h-10" />
            </div>
          </div>
          <div class="stat">
            <div class="stat-title">New Registers</div>
            <div class="stat-value">1,200</div>
            <div class="stat-desc">↘︎ 90 (14%)</div>
            <div class="stat-figure text-secondary">
              <mdi-house class="w-10 h-10" />
            </div>
          </div>
        </div>

        <div class="w-full aspect-[16/9] bg-secondary rounded-lg my-8" />
        <div class="w-full aspect-[16/9] bg-secondary rounded-lg my-8" />
      </section>

      <button class="btn btn-sm btn-outline my-4" @click="store.$state.compareOpen = !store.$state.compareOpen">
        (((open comparison {{ store.$state.compareOpen }})))
      </button>
    </div>

    <CompareOverlay :is-opened="store.$state.compareOpen" />

    <router-link :to="{ name: 'plan' }" class="btn btn-outline btn-wide">
      <mdi-chevron-left class="w-6 h-6 -ml-2 mr-2" />back</router-link>
  </main>
</template>

<route lang="yaml">
  name: results
</route>
