<script setup lang="ts">
	import { useStore } from '@/store';
	import VitailseLogo from '@/assets/logo.png';
	useHead({
		title: 'Vitailse | Opinionated vite starter template',
	});

	const store = useStore();
	const { t } = useI18n();
</script>

<template>
	<div class="grid place-items-center min-h-[80vh]">
		<div>
			<img :src="VitailseLogo" width="300" class="mx-auto" />
			<p class="lg:text-left text-center">
				{{ t('intro.desc') }}
				<a
					href="https://tailwindcss.com/"
					class="text-blue-500 hover:underline"
					>TailwindCSS</a
				>
			</p>
			<p class="text-center">
				{{ t('intro.github') }}
				<a
					class="text-blue-500 hover:underline"
					href="https://github.com/zynth17/vitailse"
					>Github Repo</a
				>
			</p>
			<div class="mt-5 text-center">
				<button
					@click="store.$state.count++"
					class="
						btn btn-primary mb-4
					"
				>
					Count : {{ store.$state.count }}
				</button>
			</div>
		</div>
		<iframe src="https://hackathon.arendus.pro/" width="600" height="400" class="ring-4 ring-black rounded-lg"></iframe>
		<router-link
			:to="{ name: 'other-page' }"
			class="
				mt-5
				text-center
				hover:text-gray-200
				dark:hover:text-gray-500
				hover:underline
			"
			>{{ t('pages.other.menu') }}</router-link
		>
	</div>
</template>

<route lang="yaml">
name: home
</route>
