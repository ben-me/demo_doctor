<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
</script>

<Section class="flex items-center  py-10 sm:flex">
	<article
		class="bg-primary shadow-sm/30 mx-auto max-w-[1200px] grow rounded-lg px-3 py-5 sm:px-10"
	>
		<h2 class="text-h3 my-[0_1rem] hyphens-auto font-bold sm:hyphens-none">
			Praxis für Allgemeinmedizin
		</h2>
		<h3 class="text-h4 my-[0_0.5rem] font-semibold">Informationen:</h3>
		<div class="grid gap-10 sm:grid-cols-2">
			<div class="grid gap-1">
				<h4 class="text-normal font-bold">Sprechzeiten:</h4>
				<table>
					<caption class="sr-only">Die Sprechzeiten je Wochentag</caption>
					<thead class="sr-only">
						<tr class="font-semibold">
							<th scope="col">Tag</th>
							<th scope="col">Uhrzeit</th>
						</tr>
					</thead>
					<tbody class="grid gap-3">
						<tr>
							<th scope="row" class="font-normal">Montag:</th>
							<td>08:00 - 14:00</td>
						</tr>
						<tr>
							<th scope="row" class="font-normal">Dienstag:</th>
							<td>08:00 - 12:00 <br /> 13:00 - 16:00</td>
						</tr>
						<tr>
							<th scope="row" class="font-normal">Mittwoch:</th>
							<td>08:00 - 14:00</td>
						</tr>
						<tr>
							<th scope="row" class="font-normal">Donnerstag:</th>
							<td>08:00 - 12:00 <br /> 13:00 - 16:00</td>
						</tr>
						<tr>
							<th scope="row" class="font-normal">Freitag:</th>
							<td>08:00 - 12:00</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="flex flex-col">
				<h4 class="text-normal mb-0.5 font-bold">Addressdaten:</h4>
				<address class="my-[0_1.5rem] flex flex-col justify-around gap-6 not-italic">
					<div>
						Allgemeinmedizinische Praxis Demo-Care <br />
						Musterstraße 23 <br />
						12345 Musterstadt <br />
					</div>

					<div class="text-normal/3">
						<a href="tel:012345678901" class="text-blue-800 underline">
							<svg xmlns="http://www.w3.org/2000/svg" class="inline w-5" viewBox="0 0 24 24">
								<path
									fill="black"
									d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
								/>
							</svg>
							0123 - 456 789 01
						</a>
						<br />
						<a href="mailto:kontakt@demo-care.de" class="text-blue-800 underline">
							<svg xmlns="http://www.w3.org/2000/svg" class="inline w-5" viewBox="0 0 24 24">
								<path
									fill="black"
									d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"
								/>
							</svg>
							kontakt@demo-care.de
						</a>
					</div>
				</address>
				<p class="text-normal/5">Parkplätze befinden sich hinter der Praxis.</p>
			</div>
		</div>
	</article>
</Section>

<style>
	tr {
		display: flex;
		justify-content: space-between;
	}
</style>
