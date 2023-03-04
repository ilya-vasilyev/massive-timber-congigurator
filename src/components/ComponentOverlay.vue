<script setup lang="ts">
import { useStore } from '@/store';

const props = defineProps<{
  isOpened: boolean
}>()
const store = useStore();

</script>

<template>
  <Transition name="scale">
    <div v-if="isOpened" class="fixed top-0 left-0 w-full h-full z-30">
      <div class="absolute inset-0 bg-base-content opacity-50 cursor-pointer" @click="store.$state.overlayOpen = false" />
      <div class="relative my-16 mx-auto max-w-4xl bg-base-100">

        <div class="grid grid-cols-2 auto-rows-auto p-8">
          <div class="w-full aspect-[16/9] bg-secondary rounded-lg" />

          <div class="px-4 row-span-2">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-lg">Width</span>
                <span class="label-text font-bold text-lg">100%</span>
              </label>
              <input type="range" min="0" max="100" value="40" class="range range-sm range-accent" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-lg">Width</span>
                <span class="label-text font-bold text-lg">100%</span>
              </label>
              <input type="range" min="0" max="100" value="40" class="range range-sm range-accent" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-lg">Width</span>
                <span class="label-text font-bold text-lg">100%</span>
              </label>
              <input type="range" min="0" max="100" value="40" class="range range-sm range-accent" />
            </div>

          </div>

          <div class="flex gap-1 my-4">
            <div class="badge">neutral</div>
            <div class="badge badge-primary">primary</div>
            <div class="badge badge-secondary">secondary</div>
            <div class="badge badge-accent">accent</div>
            <div class="badge badge-ghost">ghost</div>
          </div>
          <p>123 123 123 </p>
        </div>
        <button class="btn btn-outline mb-4 px-8" @click="store.$state.overlayOpen = false">OK</button>
      </div>
    </div>
  </Transition>
</template>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: opacity 0.1s linear, transform 0.1s ease-in-out;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(1.05) translateY(-5px);
}
</style>