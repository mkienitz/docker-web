import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'GRNVS GO BR!',
		len: 0,
		color: '#ff00ff',
		tutorSheets: ['02', '03']
	}
});

export default app;