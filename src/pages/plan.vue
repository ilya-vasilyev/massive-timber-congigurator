<script setup lang="ts">
import { useStore } from '@/store';
import ComponentOverlay from '@/components/ComponentOverlay.vue';

useHead({
	title: 'Plan view',
});

const store = useStore();

</script>

<template>
	<div class="pt-8 mx-auto max-w-5xl text-center">
		<!-- <h1 class="font-display text-4xl mb-8">Plan</h1> -->

		<main class="grid grid-cols-3 auto-rows-auto">

			<div class="col-span-2 w-full aspect-[4/3] overflow-hidden ring-4 ring-offset-4 ring-secondary rounded-lg">
				<iframe src="https://hackathon.arendus.pro/"
				class="transition rounded-lg w-[200%] h-[200%] transform scale-50 -translate-x-1/4 -translate-y-1/4 select-none"></iframe>
			</div>


			<aside class="row-span-2 px-4">

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

				<button class="btn btn-sm btn-outline my-4" @click="store.$state.overlayOpen = !store.$state.overlayOpen">
					(((open component {{ store.$state.overlayOpen }})))
				</button>

			</aside>

			<div class="col-span-2">

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


			</div>
		</main>

		<ComponentOverlay :is-opened="store.$state.overlayOpen"  />


		<nav class="flex gap-2 justify-center py-8 bg-base-100 sticky bottom-0">
			<router-link :to="{ name: 'filter02' }" class="btn btn-outline btn-wide">
				<mdi-chevron-left class="w-6 h-6 -ml-2 mr-2" />
				Back
			</router-link>
			<router-link :to="{ name: 'results' }" class="btn btn-primary btn-wide">
				Results
				<mdi-chevron-right class="w-6 h-6 ml-2 -mr-2" />
			</router-link>
		</nav>
	</div>
</template>

<style scoped></style>

<route lang="yaml">
name: plan
</route>
