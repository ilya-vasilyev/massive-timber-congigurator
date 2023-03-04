<script setup lang="ts">
useHead({
	title: 'Plan view',
});
</script>

<template>
	<div class="my-8 mx-auto max-w-4xl text-center">
		<h1 class="font-display text-4xl mb-8">Plan</h1>
		<iframe src="https://hackathon.arendus.pro/" width="600" height="400" class="ring-4 ring-black rounded-lg mx-auto"></iframe>

		<nav class="flex gap-2 justify-center my-8">
			<router-link :to="{ name: 'filter02' }" class="btn btn-outline btn-wide">
				<mdi-chevron-left class="w-6 h-6 -ml-2 mr-2" />
				Back
			</router-link>
			<router-link :to="{ name: 'plan' }" class="btn btn-primary btn-wide" disabled>
				Next
				<mdi-chevron-right class="w-6 h-6 ml-2 -mr-2" />
			</router-link>
		</nav>
	</div>
</template>

<style scoped></style>

<route lang="yaml">
name: plan
</route>
