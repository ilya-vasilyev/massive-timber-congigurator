<script setup lang="ts">
import CompareOverlay from '@/components/CompareOverlay.vue';
import { useStore } from '@/store';
useHead({
  title: 'Masstimber configurator',
});
const store = useStore();
</script>

<template>
  <main class="max-w-5xl mx-auto mt-16 text-center">
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

        <div class="divider"></div>

        <div class="overflow-x-auto my-8">
          <table class="table w-full">
            <!-- head -->
            <thead>
              <tr>
                <th></th>
                <th>Metric</th>
                <th>Metric</th>
                <th class="text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr class="hover">
                <th>Facades</th>
                <td>123</td>
                <td>123</td>
                <td class="text-right">€1 230</td>
              </tr>
              <!-- row 2 -->
              <tr class="hover">
                <th>Columns</th>
                <td>123</td>
                <td>123</td>
                <td class="text-right">€1 230</td>
              </tr>
              <!-- row 3 -->
              <tr class="hover">
                <th>Beams</th>
                <td>123</td>
                <td>123</td>
                <td class="text-right">€1 230</td>
              </tr>
              <!-- row 4 -->
              <tr class="hover">
                <th>Floors</th>
                <td>123</td>
                <td>123</td>
                <td class="text-right">€1 230</td>
              </tr>
              <!-- total -->
              <tr class="hover font-bold border-t-2">
                <th>TOTAL</th>
                <td></td>
                <td></td>
                <td class="text-right">€123 000</td>
              </tr>
            </tbody>
        </table>
      </div>

        <div class="w-full aspect-[16/9] bg-secondary rounded-lg my-8" />
        <div class="w-full aspect-[16/9] bg-secondary rounded-lg my-8" />
      </section>

      <aside class="px-4">
        <!-- <button class="btn btn-sm btn-outline my-4" @click="store.$state.compareOpen = !store.$state.compareOpen">
                (((open comparison {{ store.$state.compareOpen }})))
              </button> -->

        <button class="btn btn-outline mb-4 w-full" @click="store.$state.compareOpen = !store.$state.compareOpen">
          <mdi-download class="w-6 h-6 mr-2 -ml-2" />
          Download model (.3dm)
        </button>
        <button class="btn btn-outline mb-4 w-full" @click="store.$state.compareOpen = !store.$state.compareOpen">
          <mdi-download class="w-6 h-6 mr-2 -ml-2" />
          Download specs (.csv)
        </button>
        <button class="btn btn-outline mb-4 w-full" @click="store.$state.compareOpen = !store.$state.compareOpen">
          <mdi-download class="w-6 h-6 mr-2 -ml-2" />
          Download LCA (.xlsx)
        </button>

      </aside>
    </div>

    <CompareOverlay :is-opened="store.$state.compareOpen" />

    <nav class="flex gap-2 justify-center py-4 bg-base-100 sticky bottom-0">
      <router-link :to="{ name: 'plan' }" class="btn btn-outline btn-wide">
        <mdi-chevron-left class="w-6 h-6 -ml-2 mr-2" />Back</router-link>
      <router-link :to="{ name: 'compare' }" class="btn btn-primary btn-wide">
        <mdi-scale-unbalanced class="w-6 h-6 -ml-2 mr-2" />Compare</router-link>
    </nav>
  </main>
</template>

<route lang="yaml">
  name: results
</route>
