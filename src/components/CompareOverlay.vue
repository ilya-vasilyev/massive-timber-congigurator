<script setup lang="ts">
import { useStore } from '@/store';

const props = defineProps<{
  isOpened: boolean
}>()
const store = useStore();

</script>

<template>
  <Transition name="left">
    <div v-if="isOpened" class="fixed top-0 left-0 w-full h-full z-30">
      <div class="absolute inset-0 bg-base-content opacity-50 cursor-pointer" @click="store.$state.compareOpen = false" />
      <div class="absolute right-0 top-0 bottom-0 max-w-sm bg-base-100">

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe voluptates aliquid asperiores aliquam quo molestias explicabo odio voluptatem eius voluptate velit nam dolore ad nesciunt esse rerum, consequatur, quasi commodi.</p>
        <button class="btn btn-outline mb-4 px-8" @click="store.$state.compareOpen = false">OK</button>
      </div>
    </div>
  </Transition>
</template>

<style>
.left-enter-active,
.left-leave-active {
  transition: opacity 0.1s linear, transform 0.1s ease-in-out;
}

.left-enter-from,
.left-leave-to {
  opacity: 0;
  transform: scaleX(1.05) translateX(10px);
}
</style>