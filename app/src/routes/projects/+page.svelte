<script lang="ts">
	import { page } from '$app/stores';
	import { useQuery } from '@sanity/svelte-loader';

	export let data;
	const q = useQuery(data);

	console.log(data);
</script>
