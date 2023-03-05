<script setup lang="ts">
import FilterStep from '@/components/FilterStep.vue';
import Logo from '@/assets/creatomus-black-logo-text-vertical.png';


const typeIndex = ref(-1)

useHead({
	title: 'Building type',
});
</script>

<template>
	<FilterStep title="Building type" back="filter01" next="filter03">
		<div class="flex flex-wrap justify-center gap-4">

			<div class="card w-48 bg-base-100 shadow-lg card-bordered border-2 ring-primary cursor-pointer transition-all duration-200"
				:class="typeIndex === 0 ? 'ring-4 ring-offset-4 border-primary shadow-2xl' : ''" @click="typeIndex = 0">
				<mdi-home-variant-outline class="w-24 h-24 mx-auto mt-4 text-[#999]" />
				<div class="card-body items-center text-center p-4">
					<h2 class="card-title text-base">Residential</h2>
				</div>
			</div>

			<div class="card w-48 bg-base-100 shadow-lg card-bordered border-2 ring-primary cursor-pointer transition-all duration-200"
				:class="typeIndex === 1 ? 'ring-4 ring-offset-4 border-primary shadow-2xl' : ''" @click="typeIndex = 1">
				<mdi-office-building-outline class="w-24 h-24 mx-auto mt-4 text-[#999]" />
				<div class="card-body items-center text-center p-4">
					<h2 class="card-title text-base">Office</h2>
				</div>
			</div>

			<div class="card w-48 bg-base-100 shadow-lg card-bordered border-2 ring-primary cursor-pointer transition-all duration-200"
				:class="typeIndex === 2 ? 'ring-4 ring-offset-4 border-primary shadow-2xl' : ''" @click="typeIndex = 2">
				<mdi-school class="w-24 h-24 mx-auto mt-4 text-[#999]" />
				<div class="card-body items-center text-center p-4">
					<h2 class="card-title text-base">School</h2>
				</div>
			</div>

			<div class="card w-48 bg-base-100 shadow-lg card-bordered border-2 ring-primary cursor-pointer transition-all duration-200"
				:class="typeIndex === 3 ? 'ring-4 ring-offset-4 border-primary shadow-2xl' : ''" @click="typeIndex = 3">
				<mdi-store class="w-24 h-24 mx-auto mt-4 text-[#999]" />
				<div class="card-body items-center text-center p-4">
					<h2 class="card-title text-base">Commercial</h2>
				</div>
			</div>

			<div class="card w-48 bg-base-100 shadow-lg card-bordered border-2 ring-primary cursor-pointer transition-all duration-200"
				:class="typeIndex === 4 ? 'ring-4 ring-offset-4 border-primary shadow-2xl' : ''" @click="typeIndex = 4">
				<mdi-hospital-building class="w-24 h-24 mx-auto mt-4 text-[#999]" />
				<div class="card-body items-center text-center p-4">
					<h2 class="card-title text-base">Hospital</h2>
				</div>
			</div>


		</div>
	</FilterStep>
</template>

<style scoped></style>

<route lang="yaml">
name: filter02
</route>
