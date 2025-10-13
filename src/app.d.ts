import type { Pathname } from '$app/types';
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface InternalLink {
		href: Pathname;
		label: string;
		fragments?: string[];
	}
}

export {};
