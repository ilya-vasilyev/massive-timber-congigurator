<script setup lang="ts">
import FilterStep from '@/components/FilterStep.vue';

useHead({
	title: 'Filter 01',
});
</script>

<template>
	<FilterStep title="Filter 01" back="/" next="filter02">
		<p>123 123 123</p>
	</FilterStep>
</template>

<style scoped></style>

<route lang="yaml">
name: filter01
</route>
