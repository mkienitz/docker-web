<script>
	export let len;
	export let name;
	export let color;
	export let files;

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
		randomizeColor();
	}

	function incSize() {
		len = Math.min(10, len + 1);
		shrink = len == 10;
	}

	function decSize() {
		len = Math.max(0, len - 1);
		shrink = len != 0;
	}

	function updateName() {
		name = "GRNVS GO BR" + "R".repeat(len) + "!";
	}

	function randomizeColor() {
		let newCol = "#";
		for (let i = 0; i < 3; ++i) {
			newCol += Math.round(Math.random() * 155 + 100).toString(16);
		}
		color = newCol;
	}
</script>

<svelte:window on:keydown={handleKeydown} />
<main>
	<h1 on:click={handleClick} style="--color : {color} ">{name}</h1>
	<ul>
		<li><a href="https://terminplaner4.dfn.de/NAyTDhcGxD7Cqabt">Terminumfrage - Fragestunde</a></li>
		{#each files as file}
			<li><a href="/files/{file.filename}">{file.title}</a></li>
		{/each}
	</ul>
	<p class="BBB"><a href="https://bbb.maxkienitz.com">BBB Room</a></p>
	<p class="footnote">Use WASD or click :)</p>
</main>

<style>
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: var(--color);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 250;
	}

	ul {
		padding: 0;
	}

	li,
	.BBB {
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

	@media (prefers-color-scheme: dark) {
		.footnote {
			color: #adadad;
		}
	}
</style>
