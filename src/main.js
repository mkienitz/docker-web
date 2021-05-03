import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Max',
		len: 1,
		color: '#ff00ff'
	}
});

export default app;