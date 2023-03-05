<script setup lang="ts">
import { useStore } from '@/store';
useHead({
  title: 'Masstimber configurator',
});
const store = useStore();

const selectedVariant = ref(1)
</script>

<template>
  <main class="max-w-5xl mx-auto mt-16 text-center">
    <h1 class="font-display text-4xl text-center mb-16">Compare results</h1>


    <section class="flex gap-4 my-16 justify-center">

      <div class="card card-bordered border-2 w-56 bg-base-100 shadow-xl transition-all duration-200"
        :class="selectedVariant === 0 ? 'border-primary ring-4 ring-offset-4 ring-primary' : ''">
        <div class="card-body items-center">
          <h2 class="card-title">Variant 1</h2>
          <div class="badge badge-primary opacity-0">recommended</div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="divider my-0"></div>
          <div class="card-actions">
            <button class="btn w-full btn-outline btn-sm"
              :class="selectedVariant === 0 ? 'btn-disabled' : 'btn-primary btn-outline'"
              @click="selectedVariant = 0"><span class="text-base-content">{{ selectedVariant === 0 ? 'Selected' :
                'Select'
              }}</span></button>
          </div>
        </div>
      </div>

      <div class="card card-bordered border-2 w-56 bg-base-100 shadow-xl transition-all duration-200"
        :class="selectedVariant === 1 ? 'border-primary ring-4 ring-offset-4 ring-primary' : ''">
        <div class="card-body items-center">
          <h2 class="card-title">Variant 2</h2>
          <div class="badge badge-primary">recommended</div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="divider my-0"></div>
          <div class="card-actions">
            <button class="btn w-full btn-outline btn-sm"
              :class="selectedVariant === 1 ? 'btn-disabled' : 'btn-primary btn-outline'"
              @click="selectedVariant = 1"><span class="text-base-content">
                {{ selectedVariant === 1 ? 'Selected' : 'Select' }} </span></button>
          </div>
        </div>
      </div>

      <div class="card card-bordered border-2 w-56 bg-base-100 shadow-xl transition-all duration-200"
        :class="selectedVariant === 2 ? 'border-primary ring-4 ring-offset-4 ring-primary' : ''">
        <div class="card-body items-center">
          <h2 class="card-title">Variant 3</h2>
          <div class="badge badge-primary opacity-0">recommended</div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="divider my-0"></div>
          <div class="card-actions">
            <button class="btn w-full btn-outline btn-sm"
              :class="selectedVariant === 2 ? 'btn-disabled' : 'btn-primary btn-outline'"
              @click="selectedVariant = 2"><span class="text-base-content">{{ selectedVariant === 2 ? 'Selected' :
                'Select' }}</span></button>
          </div>
        </div>
      </div>

    </section>

    <nav class="flex gap-2 justify-center py-4 bg-base-100 sticky bottom-0">
      <router-link :to="{ name: 'results' }" class="btn btn-outline btn-wide">
        <mdi-chevron-left class="w-6 h-6 -ml-2 mr-2" />Back</router-link>
      <router-link :to="{ name: 'home' }" class="btn btn-primary btn-wide">
        <mdi-flag-outline class="w-6 h-6 -ml-2 mr-2" />Finish</router-link>
    </nav>
  </main>
</template>

<route lang="yaml">
  name: compare
</route>
