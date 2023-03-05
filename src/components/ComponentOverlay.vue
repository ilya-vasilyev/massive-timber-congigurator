<script setup lang="ts">
import { useStore } from '@/store';
import imgColumns from '@/assets/comp1.png';
import imgFloor from '@/assets/comp2.png';
import imgBeams from '@/assets/comp3.png';
import imgFacades from '@/assets/comp4.png';


const props = defineProps<{
  isOpened: boolean,
  selected: number,
}>()
const store = useStore();

const components = reactive([
  {
    img: imgFacades,
    name: 'Facade',
    selectedMaterial: 0,
    materials: [
      {
        name: "Timber",
        prodStage: '<div class="stat-value">8.60<small>E</small>+3</div>',
        buildStage: '<div class="stat-value text-green-600">2.68<small>E</small>+0</div>',
        usingStage: '<div class="stat-value">0</div>',
        eolStage: '<div class="stat-value">8.14<small>E</small>+2</div>',
        price: '<div class="stat-value border-b-4 border-accent">€1230</div>',
        timbers: ['Timber frame', 'Solid wood', 'Timber mulion']
      }, {
        name: "Prefab concrete",
        prodStage: '<div class="stat-value">2.38<small>E</small>+3</div>',
        buildStage: '<div class="stat-value text-red-600">4.69<small>E</small>+2</div>',
        usingStage: '<div class="stat-value">0</div>',
        eolStage: '<div class="stat-value">7.76<small>E</small>+0</div>',
        price: '<div class="stat-value border-b-4 border-accent">€1230</div>',
        timbers: []
      }, {
        name: "Steel / Aluminium",
        prodStage: '<div class="stat-value text-red-600">1.7<small>E</small>+3</div>',
        buildStage: '<div class="stat-value">1.89<small>E</small>+1</div>',
        usingStage: '<div class="stat-value">0</div>',
        eolStage: '<div class="stat-value">1.2<small>E</small>+1</div>',
        price: '<div class="stat-value border-b-4 border-accent">€1230</div>',
        timbers: []
      },

    ]

  }, {
    img: imgColumns,
    name: 'Columns',
    selectedMaterial: 0,
    materials: [
      {
        name: "Timber",
        prodStage: '<div class="stat-value">6.46<small>E</small>+2</div>',
        buildStage: '<div class="stat-value text-green-600">3.16<small>E</small>+0</div>',
        usingStage: '<div class="stat-value">0</div>',
        eolStage: '<div class="stat-value">7.67<small>E</small>+2</div>',
        price: '<div class="stat-value border-b-4 border-accent">€1230</div>',
        timbers: ["GLULAM", "LVL", "KVH"]
      }, {
        name: "Prefab concrete",
        prodStage: '<div class="stat-value">2.38<small>E</small>+2</div>',
        buildStage: '<div class="stat-value text-red-600">4.69<small>E</small>+1</div>',
        usingStage: '<div class="stat-value">0</div>',
        eolStage: '<div class="stat-value">7.76<small>E</small>+0</div>',
        price: '<div class="stat-value border-b-4 border-accent">€1230</div>',
        timbers: []
      }, {
        name: "Steel / Aluminium",
        prodStage: '<div class="stat-value">1.05<small>E</small>+3</div>',
        buildStage: '<div class="stat-value text-green-600">6.59<small>E</small>-1</div>',
        usingStage: '<div class="stat-value">0</div>',
        eolStage: '<div class="stat-value">4.23<small>E</small>+1</div>',
        price: '<div class="stat-value border-b-4 border-accent">€1230</div>',
        timbers: []
      },

    ]

  }, {
    img: imgBeams,
    name: 'Beams',
    selectedMaterial: 0,
    materials: [
      {
        name: "Timber",
        prodStage: '<div class="stat-value">6.81<small>E</small>+2</div>',
        buildStage: '<div class="stat-value text-green-600">4.42<small>E</small>+0</div>',
        usingStage: '<div class="stat-value">0</div>',
        eolStage: '<div class="stat-value">7.5<small>E</small>+2</div>',
        price: '<div class="stat-value border-b-4 border-accent">€1230</div>',
        timbers: ["GLULAM", "LVL", "KVH"]
      }, {
        name: "Prefab concrete",
        prodStage: '<div class="stat-value">7.16<small>E</small>+2</div>',
        buildStage: '<div class="stat-value text-red-600">9.1<small>E</small>+0</div>',
        usingStage: '<div class="stat-value">0</div>',
        eolStage: '<div class="stat-value">12.03<small>E</small>+0</div>',
        price: '<div class="stat-value border-b-4 border-accent">€1230</div>',
        timbers: []
      }, {
        name: "Steel / Aluminium",
        prodStage: '<div class="stat-value">1.05<small>E</small>+3</div>',
        buildStage: '<div class="stat-value text-red-600">6.59<small>E</small>-1</div>',
        usingStage: '<div class="stat-value">0</div>',
        eolStage: '<div class="stat-value">4.23<small>E</small>+1</div>',
        price: '<div class="stat-value border-b-4 border-accent">€1230</div>',
        timbers: []
      },

    ]

  }, {
    img: imgFloor,
    name: 'Floor system',
    selectedMaterial: 0,
    materials: [
      {
        name: "Timber",
        prodStage: '<div class="stat-value">1.81<small>E</small>+2</div>',
        buildStage: '<div class="stat-value text-green-600">4.09<small>E</small>+0</div>',
        usingStage: '<div class="stat-value">0</div>',
        eolStage: '<div class="stat-value">2.28<small>E</small>+2</div>',
        price: '<div class="stat-value border-b-4 border-accent">€1230</div>',
        timbers: ['CLT', "GLULAM", "I-Joist"]
      }, {
        name: "Prefab concrete",
        prodStage: '<div class="stat-value">1.55<small>E</small>+2</div>',
        buildStage: '<div class="stat-value text-red-600">5.18<small>E</small>+1</div>',
        usingStage: '<div class="stat-value">0</div>',
        eolStage: '<div class="stat-value">4.63<small>E</small>+1</div>',
        price: '<div class="stat-value border-b-4 border-accent">€1230</div>',
        timbers: []
      }, {
        name: "Steel / Aluminium",
        prodStage: '<div class="stat-value">4.22<small>E</small>+2</div>',
        buildStage: '<div class="stat-value text-red-600">7.21<small>E</small>+0</div>',
        usingStage: '<div class="stat-value">0</div>',
        eolStage: '<div class="stat-value">4.5<small>E</small>+0</div>',
        price: '<div class="stat-value border-b-4 border-accent">€1230</div>',
        timbers: []
      },

    ]

  }
])

const timberType = ref(0)
const timbers = ['CLT', 'LVL', "GLULAM"]

</script>

<template>
  <Transition name="scale">
    <div v-if="isOpened" class="fixed top-0 left-0 w-full h-full z-30">
      <div class="absolute inset-0 bg-base-content opacity-50 cursor-pointer" @click="store.$state.overlayOpen = false" />
      <div class="relative my-4 mx-auto max-w-5xl bg-base-100">

        <template v-for="(component, i) in components" :key="i">

          <div v-if="selected === i" class="grid grid-cols-2 auto-rows-auto p-4">
            <div>
              <p class="text-left font-bold px-2 mb-2">{{ component.name }}</p>
              <img :src="component.img"
                class="w-full aspect-[16/10] object-cover bg-secondary rounded-lg border-2 border-secondary" />
            </div>

            <div class="px-4 row-span-2">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text text-lg">Material</span>
                </label>
                <div class="btn-group">
                  <button v-for="(material, j) in component.materials" :key="j" class="btn flex-1"
                    :class="component.selectedMaterial === j ? 'btn-accent' : ''" @click="component.selectedMaterial = j">
                    {{ component.materials[j].name }}
                    <span v-if="j === 0" class="notification"></span>
                  </button>
                </div>
              </div>

              <div v-if="component.selectedMaterial === 0" class="form-control w-full mt-2">
                <label class="label">
                  <span class="label-text text-lg">Producer</span>
                </label>
                <select class="select select-bordered select-accent border-2">
                  <option disabled selected>Pick a producer...</option>
                  <option>Producer 001</option>
                  <option>Producer 002</option>
                  <option>Producer 003</option>
                  <option>Producer 004</option>
                </select>
              </div>

              <div v-if="component.selectedMaterial === 0" class="form-control w-full mt-2">
                <label class="label">
                  <span class="label-text text-lg">Timber type</span>
                </label>
                <div class="btn-group">
                  <button v-for="(timber, k) in component.materials[component.selectedMaterial].timbers" :key="k" class="btn flex-1"
                    :class="timberType === k ? 'btn-accent' : ''" @click="timberType = k">
                    {{ timber }}</button>
                </div>
              </div>
            </div>


            <div class="col-span-2 mt-4">

              <p class="text-left font-bold px-2">Global warming potential (kg CO<sub>2</sub>e)</p>
              <div class="stats stats-vertical lg:stats-horizontal w-full shadow-lg border-2 border-base-300 mt-2">
                <div class="stat">
                  <div class="stat-title">Product stage:</div>
                  <div v-html="component.materials[component.selectedMaterial].prodStage"></div>
                  <!-- <div class="stat-figure text-secondary">
                        <mdi-factory class="w-10 h-10" />
                      </div> -->
                </div>
                <div class="stat">
                  <div class="stat-title">Building process</div>
                  <div v-html="component.materials[component.selectedMaterial].buildStage"></div>
                  <!-- <div class="stat-figure text-secondary">
                        <mdi-crane class="w-10 h-10" />
                      </div> -->
                </div>
                <div class="stat">
                  <div class="stat-title">Using stage</div>
                  <div v-html="component.materials[component.selectedMaterial].usingStage"></div>
                  <div class="stat-desc">({{ component.selectedMaterial === 1 ? '100' : '50' }} year cycle)</div>
                </div>
                <div class="stat">
                  <div class="stat-title">EOL stage</div>
                  <div v-html="component.materials[component.selectedMaterial].eolStage"></div>
                </div>
                <div class="stat">
                  <div class="stat-title">Component price</div>
                  <div v-html="component.materials[component.selectedMaterial].price"></div>
                </div>
              </div>
            </div>
          </div>
        </template>
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