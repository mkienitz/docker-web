import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'GRNVS GO BR!',
		len: 0,
		color: '#0065bd',
		tutorSheets: ['03', '02']
	}
});

export default app;