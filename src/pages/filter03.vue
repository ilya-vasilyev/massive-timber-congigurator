<script setup lang="ts">
import FilterStep from '@/components/FilterStep.vue';
import onsite from '@/assets/on-site.svg';
import precut from '@/assets/pre-cut.svg';
import panels from '@/assets/2d-panels.svg';
import modules from '@/assets/3d-modules.svg';


const typeIndex = ref(-1)

useHead({
	title: 'Construction Method',
});
</script>

<template>
	<FilterStep title="Construction Method" back="filter02" next="plan">
		<div class="flex flex-wrap justify-center gap-4">

			<div class="card w-56 bg-base-100 shadow-lg card-bordered border-2 ring-primary cursor-pointer transition-all duration-200"
				:class="typeIndex === 0 ? 'ring-4 ring-offset-4 border-primary shadow-2xl' : ''" @click="typeIndex = 0">
				<figure><img :src="onsite" alt="" class="mt-4"></figure>
				<div class="card-body items-center text-center p-4">
					<h2 class="card-title text-base">On-site</h2>
				</div>
			</div>

			<div class="card w-56 bg-base-100 shadow-lg card-bordered border-2 ring-primary cursor-pointer transition-all duration-200"
				:class="typeIndex === 1 ? 'ring-4 ring-offset-4 border-primary shadow-2xl' : ''" @click="typeIndex = 1">
				<figure><img :src="precut" alt="" class="mt-4"></figure>
				<div class="card-body items-center text-center p-4">
					<h2 class="card-title text-base">Pre-cut</h2>
				</div>
			</div>

			<div class="card w-56 bg-base-100 shadow-lg card-bordered border-2 ring-primary cursor-pointer transition-all duration-200"
				:class="typeIndex === 2 ? 'ring-4 ring-offset-4 border-primary shadow-2xl' : ''" @click="typeIndex = 2">
				<figure><img :src="panels" alt="" class="mt-4"></figure>
				<div class="card-body items-center text-center p-4">
					<h2 class="card-title text-base">2D panels</h2>
				</div>
			</div>

			<div class="card w-56 bg-base-100 shadow-lg card-bordered border-2 ring-primary cursor-pointer transition-all duration-200"
				:class="typeIndex === 3 ? 'ring-4 ring-offset-4 border-primary shadow-2xl' : ''" @click="typeIndex = 3">
				<figure><img :src="modules" alt="" class="mt-4"></figure>
				<div class="card-body items-center text-center p-4">
					<h2 class="card-title text-base">3D modules</h2>
				</div>
			</div>

		</div>
	</FilterStep>
</template>

<style scoped></style>

<route lang="yaml">
name: filter03
</route>
