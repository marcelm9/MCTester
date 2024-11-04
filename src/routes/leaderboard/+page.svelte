<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$lib/Header.svelte';
	import type { LeaderboardEntry } from '$lib/types';
	import { onMount } from 'svelte';

	let leaderboard: LeaderboardEntry[] = [];
	let loading = true;

	onMount(async () => {
		loading = true;
		const response = await fetch('/api/leaderboard');
		leaderboard = await response.json();

		leaderboard = leaderboard.map((entry, index) => ({ ...entry, rank: index + 1 }));
		loading = false;
	});
</script>

<main>
	<Header text="Daten- und Informatikrecht" />
	<inner>
		{#if loading}
			<p class="text-white">Loading ...</p>
		{:else}
			<div class="text-4xl text-white">Leaderboard</div>
			<div class="mb-4 text-sm text-gray-400">Top 25</div>

			{#if leaderboard.length === 0}
				<p class="text-white">No entries yet</p>
			{:else}
				<div class="t">
					{#each leaderboard as entry}
						<div class="g">
							<div>{entry.rank}</div>
							<div>{entry.name}</div>
							<div>{entry.points}</div>
							<div>{entry.time.toFixed(2)} s</div>
						</div>
					{/each}
				</div>
			{/if}
			<div class="footer">
				<button class="button-secondary" on:click={() => goto('/home')}>Back</button>
			</div>
		{/if}
	</inner>
</main>

<style>
	inner {
		display: block;
		margin: auto;
		max-width: var(--max-width);
		padding: 1rem;
	}

	.footer {
		display: flex;
		margin-top: 1rem;
		justify-content: space-between;
	}

	.g {
		display: grid;
		grid-template-columns: 3rem 9fr 2fr 5fr;
		border-left: 1px solid white;
	}

	.g:first-child {
		border-top: 1px solid white;
	}

	.g > div {
		padding: 0.5rem;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		border-right: 1px solid white;
		border-bottom: 1px solid white;
	}
</style>
