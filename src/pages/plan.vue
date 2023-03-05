<script setup lang="ts">
import { useStore } from '@/store';
import ComponentOverlay from '@/components/ComponentOverlay.vue';

useHead({
	title: 'Plan view',
});

const store = useStore();

</script>

<template>
	<div class="pt-8 mx-auto max-w-6xl text-center">
		<!-- <h1 class="font-display text-4xl mb-8">Plan</h1> -->

		<main class="grid grid-cols-3 auto-rows-auto">

			<div class="col-span-2 w-full aspect-[4/3] overflow-hidden ring-4 ring-offset-4 ring-secondary rounded-lg">
				<iframe src="https://hackathon.arendus.pro/"
					class="transition rounded-lg w-[200%] h-[200%] transform scale-50 -translate-x-1/4 -translate-y-1/4 select-none"></iframe>
			</div>


			<aside class="row-span-2 px-8">

				<div class="form-control w-full">
					<label class="label">
						<span class="label-text text-lg">Width</span>
						<span class="label-text font-bold text-lg">100%</span>
					</label>
					<input type="range" min="0" max="100" value="40" class="range range-primary" />
				</div>

				<div class="form-control w-full">
					<label class="label">
						<span class="label-text text-lg">Width</span>
						<span class="label-text font-bold text-lg">100%</span>
					</label>
					<input type="range" min="0" max="100" value="40" class="range range-primary" />
				</div>

				<div class="divider" />

				<div class="form-control">
					<label class="label">
						<span class="label-text text-lg">Optimize for:</span>
					</label>
					<label class="label cursor-pointer justify-start gap-2">
						<input type="radio" name="radio-10" class="radio radio-primary focus:radio-primary hover:radio-primary border-2 peer" checked />
						<span class="label-text peer-checked:font-bold">Smaller SIZE</span>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer justify-start gap-2">
						<input type="radio" name="radio-10" class="radio radio-primary focus:radio-primary hover:radio-primary border-2 peer" checked />
						<span class="label-text peer-checked:font-bold">Lower PRICE</span>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer justify-start gap-2">
						<input type="radio" name="radio-10" class="radio radio-primary focus:radio-primary hover:radio-primary border-2 peer" checked />
						<span class="label-text peer-checked:font-bold">Lower EMBODIED CARBON</span>
					</label>
				</div>

				<div class="divider" />

				<p class="mb-4">Edit</p>

				<button class="btn btn-accent btn-outline w-full my-2"
					@click="store.$state.selectedComponent = 0; store.$state.overlayOpen = !store.$state.overlayOpen">
					<span class="text-base-content">Facade</span>
					<mdi-border-outside class="w-6 h-6 ml-auto text-base-content" />
				</button>
				<button class="btn btn-accent btn-outline w-full my-2"
					@click="store.$state.selectedComponent = 1; store.$state.overlayOpen = !store.$state.overlayOpen">
					<span class="text-base-content">Columns</span>
					<mdi-border-vertical class="w-6 h-6 ml-auto text-base-content" />
				</button>
				<button class="btn btn-accent btn-outline w-full my-2"
					@click="store.$state.selectedComponent = 2; store.$state.overlayOpen = !store.$state.overlayOpen">
					<span class="text-base-content">Beams</span>
					<mdi-border-horizontal class="w-6 h-6 ml-auto text-base-content" />
				</button>
				<button class="btn btn-accent btn-outline w-full my-2"
					@click="store.$state.selectedComponent = 3; store.$state.overlayOpen = !store.$state.overlayOpen">
					<span class="text-base-content">Floor system</span>
					<mdi-border-bottom class="w-6 h-6 ml-auto text-base-content" />
				</button>

			</aside>

			<div class="col-span-2">

				<p class="text-left font-bold px-2 mt-8">Global warming potential (kg CO<sub>2</sub>e per km)</p>
				<div class="stats stats-vertical lg:stats-horizontal w-full shadow-lg border-2 border-base-300 my-4">
					<div class="stat">
						<div class="stat-title">Truck</div>
						<div class="stat-value">6.44<small>E</small>-5</div>
						<div class="stat-desc">>26 tonns</div>
						<div class="stat-figure text-secondary">
							<mdi-truck class="w-10 h-10" />
						</div>
					</div>
					<div class="stat">
						<div class="stat-title">Train</div>
						<div class="stat-value">1.88<small>E</small>-5</div>
						<!-- <div class="stat-desc">↗︎ 400 (22%)</div> -->
						<div class="stat-figure text-secondary">
							<mdi-train class="w-10 h-10" />
						</div>
					</div>
					<div class="stat">
						<div class="stat-title">Container ship</div>
						<div class="stat-value">9.01<small>E</small>-6</div>
						<!-- <div class="stat-desc">↘︎ 90 (14%)</div> -->
						<div class="stat-figure text-secondary">
							<mdi-ferry class="w-10 h-10" />
						</div>
					</div>
				</div>


			</div>
		</main>

		<ComponentOverlay :is-opened="store.$state.overlayOpen" :selected="store.$state.selectedComponent" />


		<nav class="flex gap-2 justify-center py-4 bg-base-100 sticky bottom-0">
			<router-link :to="{ name: 'filter02' }" class="btn btn-outline btn-wide">
				<mdi-chevron-left class="w-6 h-6 -ml-2 mr-2" />
				Back
			</router-link>
			<router-link :to="{ name: 'results' }" class="btn btn-primary btn-wide">
				<mdi-chart-bar class="w-6 h-6 mr-2 -ml-2" />
				Results
			</router-link>
		</nav>
	</div>
</template>

<style scoped></style>

<route lang="yaml">
name: plan
</route>
