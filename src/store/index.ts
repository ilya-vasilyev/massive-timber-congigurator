import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
	state: () => ({
		count: 0,
		overlayOpen: false,
		selectedComponent: 0,
		compareOpen: false,
	}),
});
