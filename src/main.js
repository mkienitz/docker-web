import App from './App.svelte';

class File {
	filename;
	title;
	constructor(filename, title) {
		this.filename = filename;
		this.title = title;
	}
}

const app = new App({
	target: document.body,
	props: {
		name: 'GRNVS GO BR!',
		len: 0,
		color: '#0065bd',
		files: [
			new File('subnettree.pdf', 'Week 07 - Subnet Tree'),
			new File('toolkit03.pdf', 'Week 03 - Toolkit'),
			new File('toolkit02.pdf', 'Week 02 - Toolkit')
		]
	}
});

export default app;