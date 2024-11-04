<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$lib/Header.svelte';

	function training() {
		window.open(
			'https://vowi.fsinf.at/wiki/TU_Wien:Daten-_und_Informatikrecht_VU_(Haslinger)/Fragen_Pr%C3%BCfung_04.07.2024',
			'_blank'
		);
	}
</script>

<main>
	<Header text="Daten- und Informatikrecht" />
	<inner>
		<button
			class="button-primary mb-3 mr-2"
			on:click={() => {
				goto('/quiz');
			}}>Start Quiz</button
		>
		<button class="button-secondary mb-3 mr-2" on:click={training}>Training</button>
		<button class="button-secondary mb-3 mr-2" on:click={() => goto('/leaderboard')}
			>Leaderboard</button
		>
	</inner>
</main>

<style>
	inner {
		display: block;
		margin: auto;
		max-width: var(--max-width);
		padding: 1rem;
	}
</style>
