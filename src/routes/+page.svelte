<script lang="ts">
	import Card from '../components/Card.svelte';
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	import type { DndEvent } from 'svelte-dnd-action';
	import type { CardData } from '../types/types';

	let default_data: CardData = {
		text: 'Daher ist auch die Moral nicht eigentlich die Lehre, wie wir uns glücklich machen, sondern wie wir der Glückseligkeit würdig werden sollen.'
	};

	let revealed_data: CardData = {
		text: 'Daher ist auch die Moral nicht eigentlich die Lehre, wie wir uns glücklich machen, sondern wie wir der Glückseligkeit würdig werden sollen.',
		reveal: {
			year: 1788,
			source: 'http://www.korpora.org/kant/aa05/130.html',
			author: {
				id: 0,
				name: 'Immanuel Kant',
				birth: 1784,
				death: 1804,
				url: 'https://en.wikipedia.org/wiki/Immanuel_Kant'
			}
		}
	};

	let src_items = $state([
		{
			id: 101
		}
	]);

	let items = $state([
		{
			id: 27
		},
		{
			id: 45
		}
	]);

	const flipDurationMs = 300;
	function handleDndConsider(e: CustomEvent<DndEvent>) {
		items = e.detail.items as { id: number }[];
	}
	function handleDndFinalize(e: CustomEvent<DndEvent>) {
		items = e.detail.items as { id: number }[];
	}
	function handleDndConsider2(e: CustomEvent<DndEvent>) {
		src_items = e.detail.items as { id: number }[];
	}
	function handleDndFinalize2(e: CustomEvent<DndEvent>) {
		src_items = e.detail.items as { id: number }[];
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div
	class="flex h-80 flex-row flex-wrap bg-amber-700"
	use:dndzone={{ items: src_items, flipDurationMs }}
	onconsider={handleDndConsider2}
	onfinalize={handleDndFinalize2}
>
	{#each src_items as item (item.id)}
		<Card data={default_data}></Card>
	{/each}
</div>

<div
	class="flex h-80 flex-row flex-wrap bg-amber-500"
	use:dndzone={{ items, flipDurationMs, dragDisabled: true }}
	onconsider={handleDndConsider}
	onfinalize={handleDndFinalize}
>
	{#each items as item (item.id)}
		<Card data={revealed_data}></Card>
	{/each}
</div>
