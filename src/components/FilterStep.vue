<script setup lang="ts">
const props = defineProps < {
  title: string;
  back: string;
  next: string;
} > ()

useHead({
	title: props.title,
});
</script>

<template>
<div class="max-w-lg mx-auto my-16 text-center">
		<h1 class="font-display text-4xl mb-8">{{ props.title }}</h1>
    <slot></slot>
		<nav class="flex gap-2 justify-center my-8">
			<router-link :to="props.back" class="btn btn-outline btn-wide">
				<mdi-chevron-left class="w-6 h-6 -ml-2 mr-2" />
				Back
			</router-link>
			<router-link :to="props.next" class="btn btn-primary btn-wide">
				Next
				<mdi-chevron-right class="w-6 h-6 ml-2 -mr-2" />
			</router-link>
		</nav>
	</div>
</template>