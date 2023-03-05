<script setup lang="ts">
import CompareOverlay from '@/components/CompareOverlay.vue';
import { useStore } from '@/store';
import finalScreen from '@/assets/final-screen.png';

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
        <img :src="finalScreen" class="w-full aspect-[16/9] bg-secondary rounded-lg mb-8" />
        
        <div class="stats stats-vertical lg:stats-horizontal w-full shadow-lg border-2 border-base-300 my-8">
          <div class="stat">
            <div class="stat-title">Price</div>
            <div class="stat-value">294€/m<sup>2</sup></div>
            <div class="stat-desc">(structure)</div>
            <!-- <div class="stat-figure text-secondary">
              <mdi-house class="w-10 h-10" />
            </div> -->
          </div>
          <div class="stat">
            <div class="stat-title">Embodied carbon (structure)</div>
            <div class="stat-value">286.7kg</div>
            <div class="stat-desc">CO2 eq / m<sup>2</sup></div>
            <!-- <div class="stat-figure text-secondary">
              <mdi-house class="w-10 h-10" />
            </div> -->
          </div>
          <div class="stat">
            <div class="stat-title">Volume (structure)</div>
            <div class="stat-value">0.31m<sup>3</sup></div>
            <div class="stat-desc">timber / m<sup>2</sup> floor</div>
            <!-- <div class="stat-figure text-secondary">
              <mdi-house class="w-10 h-10" />
            </div> -->
          </div>
        </div>

        <div class="divider"></div>

        <div class="overflow-x-auto my-8">
          <table class="table w-full">
            <!-- head -->
            <thead>
              <tr>
                <th></th>
                <th>Volume</th>
                <th>T CO<sub>2</sub> e</th>
                <th class="text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr class="hover">
                <th>Facades</th>
                <td>80 m<sup>3</sup></td>
                <td>51.92</td>
                <td class="text-right">€76 000</td>
              </tr>
              <!-- row 2 -->
              <tr class="hover">
                <th>Columns</th>
                <td>76.8 m<sup>3</sup></td>
                <td>49.8</td>
                <td class="text-right">€72 200</td>
              </tr>
              <!-- row 3 -->
              <tr class="hover">
                <th>Beams</th>
                <td>235.2 m<sup>3</sup></td>
                <td>152.7</td>
                <td class="text-right">€223 250</td>
              </tr>
              <!-- row 4 -->
              <tr class="hover">
                <th>Floors</th>
                <td>706.6 m<sup>3</sup></td>
                <td>458.5</td>
                <td class="text-right">€670 700</td>
              </tr>
              <!-- total -->
              <tr class="hover font-bold border-t-2">
                <th>TOTAL</th>
                <td>1097.6 m<sup>3</sup></td>
                <td>1012.9</td>
                <td class="text-right">€1 042 150</td>
              </tr>
            </tbody>
        </table>
      </div>

        <!-- <div class="w-full aspect-[16/9] bg-secondary rounded-lg my-8" />
        <div class="w-full aspect-[16/9] bg-secondary rounded-lg my-8" /> -->
      </section>

      <aside class="px-4">
        <!-- <button class="btn btn-sm btn-outline my-4" @click="store.$state.compareOpen = !store.$state.compareOpen">
                (((open comparison {{ store.$state.compareOpen }})))
              </button> -->

        <button class="btn btn-outline mb-4 w-full">
          <mdi-download class="w-6 h-6 mr-2 -ml-2" />
          Download model (.ifc)
        </button>
        <button class="btn btn-outline mb-4 w-full">
          <mdi-download class="w-6 h-6 mr-2 -ml-2" />
          Download results (.pdf)
        </button>
        <button class="btn btn-outline mb-4 w-full">
          <mdi-download class="w-6 h-6 mr-2 -ml-2" />
          Download LCA (.csv)
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
