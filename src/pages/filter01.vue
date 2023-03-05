<script setup lang="ts">
import FilterStep from '@/components/FilterStep.vue';

const locations = [
	'Denmark',
	'Other...'
]

const selectedLocation = ref(-1)

useHead({
	title: 'Location',
});
</script>

<template>
	<FilterStep title="Location" back="/" next="filter02">
		<mdi-earth class="w-24 h-24 mx-auto my-4 text-[#666]" />
		<div class="flex gap-2 justify-center items-center mb-32">
			<div class="dropdown">
				<label tabindex="0" class="btn btn-outline justify-between w-64">
					{{ selectedLocation !== -1 ? locations[selectedLocation] : "Select a location" }}
					<mdi-menu-down class="w-6 h-6 -mr-1" />
				</label>
				<ul tabindex="0" class="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box mt-2 w-full border-2 border-base-content">
					<li v-for="(location, i) in locations" :key="i"><a @click="selectedLocation = i">{{ location }}</a></li>
				</ul>
			</div>
			<button class="btn btn-square btn-outline">
				<mdi-crosshairs-gps class="w-6 h-6" />
			</button>
		</div>
	</FilterStep>
</template>

<style scoped></style>

<route lang="yaml">
name: filter01
</route>
