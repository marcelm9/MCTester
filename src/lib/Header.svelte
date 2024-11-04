<script lang="ts">
	export let text;
</script>

<main>
	<div class="header">
		<div class="header-inner">
			<div class="text-xl text-white">
				{text}
			</div>
		</div>
	</div>
</main>

<style>
	.header {
		height: 3rem;
		background: linear-gradient(
			90deg,
			rgba(2, 0, 36, 1) 0%,
			rgba(9, 9, 121, 1) 35%,
			rgb(11, 166, 197) 100%
		);
	}

	.header-inner {
		max-width: var(--max-width);
		height: 100%;
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
	}
</style>
