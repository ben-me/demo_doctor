<script lang="ts">
	import Section from './components/ui/Section.svelte';
	import Logo from '$assets/LogoPastel_white.webp';
	import Link from './components/ui/Link.svelte';
</script>

<footer class="bg-footer-bg w-full text-white">
	<Section class="grid-cols-2 lg:grid-cols-3">
		<img src={Logo} class="w-50 row-start-1" alt="Logo der Praxis" />
		<address class="row-start-2 grid gap-8 not-italic lg:row-start-1 [&_span]:font-semibold">
			<div class="text-white/80">
				<span class="text-white">Adresse:</span><br />
				Allgemeinmedizinische Praxis Demo-Care <br />
				Musterstraße 23 <br />
				12345 Musterstadt <br />
			</div>
			<div>
				<span>Telefon:</span>
				<br />
				<a href="tel:012345678901" class="text-secondary underline"> 0123 456 789 01 </a>
			</div>
			<div>
				<span>Email:</span>
				<br />
				<a
					href="mailto:kontakt@demo-care.de"
					class="text-secondary
					underline"
				>
					kontakt@demo-care.de
				</a>
			</div>
		</address>

		<div class="row-start-2 lg:row-start-1">
			<h2 class="text-normal p-2 font-semibold">Navigation</h2>
			<nav class="text-white/80">
				<ul>
					<li>
						<Link href="/" class="hover:bg-footer-bg-light inline-block w-full p-2 hover:text-white"
							>Home</Link
						>
					</li>
					<li>
						<Link
							href="/leistungen"
							class="hover:bg-footer-bg-light inline-block w-full p-2 hover:text-white"
							>Leistungen</Link
						>
					</li>
					<li>
						<Link
							href="/team"
							class="hover:bg-footer-bg-light inline-block w-full p-2 hover:text-white">Team</Link
						>
					</li>
					<li>
						<Link
							href="/kontakt"
							class="hover:bg-footer-bg-light inline-block w-full p-2 hover:text-white"
							>Kontakt</Link
						>
					</li>
					<li>
						<Link
							href="/datenschutz"
							class="hover:bg-footer-bg-light inline-block w-full p-2 hover:text-white"
							>Datenschutz</Link
						>
					</li>
				</ul>
			</nav>
		</div>
	</Section>
</footer>
