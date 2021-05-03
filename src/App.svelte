<script>
	export let len;
	export let name;
	export let color;
	export function handleKeydown(event) {
		const key = event.key
		switch (key) {
			case 'w':
			case 's':
				color = '#' + ((1 << 24) * Math.random() | 0).toString(16)
				break
			case 'a':
				len = Math.max(1, len - 1)
				break
			case 'd':
				len = Math.min(10, len + 1)
				break
		}
		name = 'M' + 'a'.repeat(len) + 'x'
	}
</script>

<svelte:window on:keydown={handleKeydown} />
<main>
	<h1 style='--color : {color}'>{name}</h1>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: var(--color);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
