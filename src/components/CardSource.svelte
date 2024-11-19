<script lang="ts">
	import { dndzone, type DndEvent } from 'svelte-dnd-action';
	import type { CardData } from '../types/types';
	import Card from './Card.svelte';
	import { flip } from 'svelte/animate';

	const flipDurationMs = 300;

	let id = 0;

	let items: CardData[] = [
		{
			id,
			text: 'Daher ist auch die Moral nicht eigentlich die Lehre, wie wir uns glücklich machen, sondern wie wir der Glückseligkeit würdig werden sollen.'
		}
	];

	function handleDndConsider(e: CustomEvent<DndEvent<CardData>>) {
		items = e.detail.items;
	}
	function handleDndFinalize(e: CustomEvent<DndEvent<CardData>>) {
		console.log('finalize');
		items = e.detail.items;
		if (items.length == 0) {
			id++;
			items.push({
				id,
				text: 'Daher ist auch die Moral nicht eigentlich die Lehre, wie wir uns glücklich machen, sondern wie wir der Glückseligkeit würdig werden sollen.'
			});
		}
	}
</script>

<div
	class="m-3 flex h-80 w-80 flex-row flex-wrap justify-center bg-amber-700"
	use:dndzone={{ items: items, flipDurationMs }}
	onconsider={handleDndConsider}
	onfinalize={handleDndFinalize}
>
	{#each items as item (item.id)}
		<div animate:flip={{ duration: flipDurationMs }}>
			<Card data={item}></Card>
		</div>
	{/each}
</div>
