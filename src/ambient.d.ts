import type { Pathname } from '$app/types';

declare global {
	interface InternalLink {
		href: Pathname;
		label: string;
		fragments?: string[];
	}
}
