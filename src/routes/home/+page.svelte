<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<main>
	<div class="header">
		<div class="header-inner">
			<div class="text-xl text-white">Daten- und Informatikrecht</div>
		</div>
	</div>
	<inner>
		<button
			class="button-primary"
			on:click={() => {
				goto('/quiz');
			}}>Start Quiz</button
		>
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
</style>
