<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { goto } from '$app/navigation';
	let { children } = $props();

	onMount(() => {
		if (!['/home', 'quiz'].includes(window.location.pathname)) {
			goto('/home');
		}
	});
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.json" />
	<title>DIR Quiz</title>
</svelte:head>

{@render children()}
