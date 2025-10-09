<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import NavigationMenuContent from './components/ui/navigation-menu/navigation-menu-content.svelte';
	import NavigationMenuItem from './components/ui/navigation-menu/navigation-menu-item.svelte';
	import NavigationMenuLink from './components/ui/navigation-menu/navigation-menu-link.svelte';
	import NavigationMenuList from './components/ui/navigation-menu/navigation-menu-list.svelte';
	import NavigationMenuTrigger from './components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import NavigationMenu from './components/ui/navigation-menu/navigation-menu.svelte';
	import Logo from '$lib/assets/LogoPastel-border.webp';
	import Link from '$lib/components/ui/Link.svelte';
	import { fade } from 'svelte/transition';
	import type { Attachment } from 'svelte/attachments';

	const LINKS: InternalLink[] = [
		{
			href: '/',
			label: 'Home'
		},
		{
			href: '/leistungen',
			label: 'Leistungen',
			fragments: ['Diagnostik', 'Infektiologie', 'Reisemedizin', 'Geriatrie']
		},
		{
			href: '/team',
			label: 'Team'
		},
		{
			href: '/kontakt',
			label: 'Kontakt'
		}
	];

	let mobile_nav_open = $state(false);
	let mobile_nav_toggle_button: HTMLButtonElement;

	const mobile_nav_attachment: Attachment<HTMLElement> = (element) => {
		if (mobile_nav_open) {
			const focus_elements = Array.from(element.querySelectorAll<HTMLAnchorElement>('[href],  a '));
			focus_elements[0].focus();
		}

		return () => {
			mobile_nav_toggle_button.focus();
		};
	};

	function toggle_mobile_nav() {
		if (window) {
			document.body.classList.toggle('overflow-y-hidden');
			mobile_nav_open = !mobile_nav_open;
		}
	}
</script>

<header class="flex justify-between">
	<Link href="/" class="py-4" aria-label="Zur Demo-Care Homepage">
		<h1>
			<img src={Logo} alt="" class="max-w-[85px]" />
		</h1>
	</Link>
	<div
		class="fixed top-0 right-0 grid grid-rows-[0fr_1fr]
		transition-[grid-template-rows] duration-150
		data-[active=true]:grid-rows-[1fr_1fr] sm:hidden"
		data-active={mobile_nav_open}
	>
		<nav
			aria-label="Mobiles Navigationsmenü"
			class="mx-5 overflow-y-hidden rounded-bl-sm bg-primary text-right font-semibold"
			inert={!mobile_nav_open}
			id="mobile-nav"
			{@attach mobile_nav_attachment}
		>
			<ul class="grid gap-2 px-5 py-4">
				{#each LINKS as link (link.label)}
					<li>
						<Link autofocus={link.href === '/'} href={link.href} onclick={toggle_mobile_nav}
							>{link.label}</Link
						>
					</li>
				{/each}
			</ul>
		</nav>
		<button
			class="mx-5 h-min justify-self-end rounded-b-sm bg-primary px-1 py-[1rem_0.25rem] md:hidden"
			onclick={toggle_mobile_nav}
			bind:this={mobile_nav_toggle_button}
			aria-label="Mobiles
			Navigationsmenu umschalten"
			aria-controls="mobile-nav"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="w-10" viewBox="0 0 24 24">
				{#if !mobile_nav_open}
					<path
						out:fade={{ duration: 120 }}
						in:fade={{ delay: 150, duration: 150 }}
						fill="#000"
						d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
					/>
				{:else}
					<path
						in:fade={{ delay: 150, duration: 150 }}
						out:fade={{ duration: 150 }}
						fill="#ff1e1e"
						d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
					/>
				{/if}
			</svg>
		</button>
	</div>

	<NavigationMenu viewport={false} class="hidden sm:flex">
		<NavigationMenuList>
			{#each LINKS as link (link.href)}
				<NavigationMenuItem>
					{#if !link.fragments}
						<NavigationMenuLink href={resolve(link.href)}>{link.label}</NavigationMenuLink>
					{:else}
						<NavigationMenuTrigger onclick={() => goto(resolve(link.href))}>
							{link.label}
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul class="grid w-[150px] gap-4 p-2">
								{#each link.fragments as fragment (fragment)}
									<li>
										<NavigationMenuLink href={`${resolve(link.href)}#${fragment.toLowerCase()}`}>
											{fragment}
										</NavigationMenuLink>
									</li>
								{/each}
							</ul>
						</NavigationMenuContent>
					{/if}
				</NavigationMenuItem>
			{/each}
		</NavigationMenuList>
	</NavigationMenu>
</header>
