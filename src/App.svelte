<script>
	export let len;
	export let name;
	export let color;
	export let tutor_sheets = ['02', '03'];
	export function handleKeydown(event) {
		const key = event.key;
		switch (key) {
			case "w":
			case "s":
				color = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
				break;
			case "a":
				len = Math.max(1, len - 1);
				break;
			case "d":
				len = Math.min(10, len + 1);
				break;
		}
		name = "M" + "a".repeat(len) + "x";
	}
</script>

<svelte:window on:keydown={handleKeydown} />
<main>
	<h1 style="--color : {color}">{name}</h1>
	<ul>
		{#each tutor_sheets as sheet, i}
			<li><a href="/files/toolkit{sheet}.pdf">Woche {sheet}</a></li>
		{/each}
	</ul>
</main>

<style>
	main {
		text-align: center;
		/* padding: 0em; */
		/* max-width: 240px; */
		/* margin: 0 auto; */
	}

	h1 {
		color: var(--color);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	ul {
		padding: 0;
	}

	li {
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
		list-style-type: none;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
