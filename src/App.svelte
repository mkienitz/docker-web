<script>
	export let len;
	export let name;
	export let color;
	export let tutorSheets;

	export function handleKeydown(event) {
		const key = event.key;
		switch (key) {
			case "w":
			case "s":
				randomizeColor();
				break;
			case "a":
				decSize();
				break;
			case "d":
				incSize();
				break;
		}
		updateName();
	}

	let shrink = true;
	export function handleClick() {
		if (shrink) {
			decSize();
		} else {
			incSize();
		}
		updateName();
	}

	function incSize() {
		len = Math.min(10, len + 1);
		shrink = len == 10 ? true : false;
	}

	function decSize() {
		len = Math.max(0, len - 1);
		shrink = len == 0 ? false : true;
	}

	function updateName() {
		name = "GRNVS GO BR" + "R".repeat(len) + "!";
	}

	function randomizeColor() {
		color = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
	}
</script>

<svelte:window on:keydown={handleKeydown} />
<main>
	<h1 on:click={handleClick} style="--color : {color} ">{name}</h1>
	<ul>
		{#each tutorSheets as sheet, i}
			<li><a href="/files/toolkit{sheet}.pdf">Woche {sheet}</a></li>
		{/each}
	</ul>
	<p class="BBB"><a href="https://bbb.maxkienitz.com">BBB-Raum</a></p>
	<p class="footnote">Use WASD or click :)</p>
</main>

<style>
	main {
		text-align: center;
		/* padding: 0em; */
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: var(--color);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 200;
	}

	ul {
		padding: 0;
	}

	li, .BBB {
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
		list-style-type: none;
	}

	.footnote {
		margin-top: 5em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
