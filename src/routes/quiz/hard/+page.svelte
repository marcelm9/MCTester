<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$lib/Header.svelte';
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
		const response = await fetch('/api/questions/hard');
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
		const response = await fetch('/api/14bfdc42-e6e4-4505-887f-e5d235fd2f90', {
			method: 'POST',
			body: JSON.stringify({ name, points, time: (end_time! - start_time!) / 1000 })
		});

		if (response.status === 200) {
			goto('/leaderboard/hard');
		} else {
			const data = await response.json();
			error = data.message;
		}
	}
</script>

<main>
	{#if done}
		<Header text="Daten- und Informatikrecht" />
	{:else if current}
		<Header text="Question {current_i + 1} of {content.length}" />
	{:else}
		<Header text="Loading ..." />
	{/if}
	<inner>
		{#if !done}
			{#if !current}
				<p class="text-white">Loading ...</p>
			{:else}
				<div class="mb-4 text-2xl text-white">{current.question}</div>

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
					<button class="button-danger" on:click={next}>Next</button>
				</div>
			{/if}
		{:else}
			<div class="mb-8 text-4xl text-white">Your Result</div>

			<div class="g mt-8 text-white">
				<div>
					<input
						id="name-input"
						class="text-lg"
						type="text"
						placeholder="Name"
						pattern="^[a-zA-Z]+$"
					/>
				</div>
				<div class="text-lg">{points} / {content.length}</div>
				<div class="text-lg">{((end_time! - start_time!) / 1000).toFixed(2)} s</div>
			</div>

			<button
				class="button-secondary mr-4 mt-8"
				on:click={() => {
					goto('/home');
				}}>Home</button
			>
			<button class="button-danger mr-4 mt-8" on:click={publish}>Publish Result</button>
			{#if error !== ''}
				<p class="error-message mt-4">{error}</p>
			{/if}
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
		grid-template-columns: 2fr 1fr 1fr;
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
		border: 1px solid rgb(100, 100, 100);
		padding: 0.5rem;
		border-radius: 0.5rem;
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
