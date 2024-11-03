<script lang="ts">
	import { goto } from '$app/navigation';
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
	<div class="header">
		<div class="header-inner">
			<div class="text-xl text-white">Daten- und Informatikrecht</div>
		</div>
	</div>
	<inner>
		{#if loading}
			<p class="text-white">Loading ...</p>
		{:else}
			<div class="mb-8 text-4xl text-white">Leaderboard</div>

			{#if leaderboard.length === 0}
				<p class="text-white">No entries yet</p>
			{:else}
				<div class="t">
					{#each leaderboard as entry}
						<div class="g">
							<div>{entry.rank}</div>
							<div>{entry.name}</div>
							<div>{entry.points}</div>
							<div>{entry.time.toFixed(2)}</div>
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
	.header {
		height: 3rem;
		background: linear-gradient(
			90deg,
			rgba(2, 0, 36, 1) 0%,
			rgba(9, 9, 121, 1) 35%,
			rgba(0, 212, 255, 1) 100%
		);
		margin-bottom: 2rem;
	}

	.header-inner {
		max-width: var(--max-width);
		height: 100%;
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	main {
		display: block;
		height: 100%;
		background: linear-gradient(45deg, rgba(50, 50, 50, 1) 0%, rgba(100, 100, 100, 1) 100%);
	}

	inner {
		display: block;
		margin: auto;
		max-width: var(--max-width);
	}

	.footer {
		display: flex;
		margin-top: 2rem;
		justify-content: space-between;
	}

	.g {
		display: grid;
		grid-template-columns: 3rem 3fr 1fr 1fr;
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
		font-size: 1.5rem;
	}
</style>
