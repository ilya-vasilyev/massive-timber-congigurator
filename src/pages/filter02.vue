<script setup lang="ts">
import FilterStep from '@/components/FilterStep.vue';


useHead({
	title: 'Filter 02',
});
</script>

<template>
	<FilterStep title="Filter 02" back="filter01" next="plan">
		<p>123 123 123</p>
	</FilterStep>
</template>

<style scoped></style>

<route lang="yaml">
name: filter02
</route>
