import { writable } from 'svelte/store';

export const isMaximized = writable(false);
export const isExpanded = writable(false);