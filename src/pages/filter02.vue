<script setup lang="ts">
useHead({
	title: 'Filter 02',
});
</script>

<template>
	<div class="max-w-lg mx-auto my-16 text-center">
		<h1 class="font-display text-4xl mb-8">Filter 02</h1>
		<nav class="flex gap-2 justify-center my-8">
			<router-link :to="{ name: 'filter01' }" class="btn btn-outline btn-wide">
				<mdi-chevron-left class="w-6 h-6 -ml-2 mr-2" />
				Back
			</router-link>
			<router-link :to="{ name: 'plan' }" class="btn btn-primary btn-wide">
				Next
				<mdi-chevron-right class="w-6 h-6 ml-2 -mr-2" />
			</router-link>
		</nav>
	</div>
</template>

<style scoped></style>

<route lang="yaml">
name: filter02
</route>
