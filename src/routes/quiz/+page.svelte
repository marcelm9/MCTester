<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Question } from '$lib/types';
	import { onMount } from 'svelte';

	let content: Question[] = [];

	let current: Question;

	let current_i = 0;

	let done = false;
	let points = 0;

	let start_time;
	let end_time;

	let error = '';

	onMount(async () => {
		const response = await fetch('/api/questions');
		content = await response.json();

		current = content[current_i];

		// for (let i = 0; i < 15; i++) {
		// 	next();
		// }

		start_time = Date.now();
	});

	function checkAnswers() {
		const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
		let correct = true;

		checkboxes.forEach((checkbox, index) => {
			if (checkbox.checked !== current.answers[index][0]) {
				correct = false;
			}
		});

		if (correct) {
			points++;
		}

		// Reset checkboxes
		checkboxes.forEach((checkbox) => {
			checkbox.checked = false;
		});
	}

	function next() {
		checkAnswers();

		current_i++;
		if (current_i < content.length) {
			current = content[current_i];
		} else {
			done = true;
			end_time = Date.now();
		}
	}

	async function publish() {
		error = '';
		const name = (document.getElementById('name-input') as HTMLInputElement).value;
		if (!name || name.trim() === '') {
			error = 'no name given';
			return;
		}
		const response = await fetch('/api/leaderboard', {
			method: 'POST',
			body: JSON.stringify({ name, points, time: (end_time! - start_time!) / 1000 })
		});

		if (response.status === 200) {
			goto('/leaderboard');
		} else {
			const data = await response.json();
			error = data.message;
		}
	}
</script>

<main>
	<div class="header">
		<div class="header-inner">
			<div class="text-xl text-white">
				{#if done}
					Daten- und Informatikrecht
				{:else if current}
					Question {current_i + 1} of {content.length}
				{:else}
					Loading ...
				{/if}
			</div>
		</div>
	</div>
	<inner>
		{#if !done}
			{#if !current}
				<p class="text-white">Loading ...</p>
			{:else}
				<div class="mb-8 text-4xl text-white">{current.question}</div>

				{#each current.answers as answer}
					<form class="checkbox-group">
						<label class="checkbox-wrapper">
							<input type="checkbox" name="option1" />
							<span class="checkbox-label">
								<span class="circle"></span>
								{answer[1]}
							</span>
						</label>
					</form>
				{/each}
				<div class="footer">
					<button class="button-secondary" on:click={() => goto('/home')}>Quit</button>
					<button class="button-primary" on:click={next}>Next</button>
				</div>
			{/if}
		{:else}
			<div class="mb-8 text-4xl text-white">Your Result</div>

			<div class="g mt-8 text-white">
				<div>
					<input
						id="name-input"
						class="text-2xl"
						type="text"
						placeholder="Name"
						pattern="^[a-zA-Z]+$"
					/>
				</div>
				<div class="text-2xl">{points} / {content.length}</div>
				<div class="text-2xl">{((end_time! - start_time!) / 1000).toFixed(2)} s</div>
			</div>

			<button
				class="button-secondary mr-4 mt-8"
				on:click={() => {
					goto('/home');
				}}>Restart</button
			>
			<button class="button-primary mr-4 mt-8" on:click={publish}>Publish Result</button>
			{#if error !== ''}
				<p class="error-message mt-4">{error}</p>
			{/if}
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
		grid-template-columns: 3fr 1fr 1fr;
		border: 1px solid white;
		outline: 1px solid white;
	}

	.checkbox-group {
		display: flex;
		flex-direction: column;
	}

	.checkbox-wrapper {
		display: flex;
		align-items: center;
		margin-bottom: 0.5rem;
		cursor: pointer;
	}

	.checkbox-wrapper input[type='checkbox'] {
		display: none;
	}

	.checkbox-label {
		position: relative;
		padding-left: 2.5rem;
		cursor: pointer;
		font-size: 1.2rem;
		color: white;
		user-select: none;
	}

	/* Unchecked style */
	.checkbox-wrapper .circle {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		height: 1.5rem;
		width: 1.5rem;
		border-radius: 50%;
		background-color: black;
		transition: background-color 0.3s ease;
	}

	/* Checked style */
	.checkbox-wrapper input[type='checkbox']:checked + .checkbox-label .circle {
		background-color: #007bff; /* Blue color for checked state */
	}

	.g > div {
		padding: 0.5rem;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		outline: 1px solid white;
	}

	input {
		width: 100%;
		height: 100%;
		border: none;
		color: black;
		border-radius: 0.25rem;
	}
</style>
