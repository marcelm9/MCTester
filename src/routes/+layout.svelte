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

{@render children()}
