<script lang="ts">
	import Card from '../components/Card.svelte';
	import { dndzone } from 'svelte-dnd-action';
	import type { DndEvent } from 'svelte-dnd-action';
	import type { CardData } from '../types/types';
	import CardSource from '../components/CardSource.svelte';
	import { flip } from 'svelte/animate';

	let items: CardData[] = $state([
		{
			id: 27,
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
		},
		{
			id: 45,
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
		}
	]);

	const flipDurationMs = 300;
	function handleDndConsider(e: CustomEvent<DndEvent>) {
		items = e.detail.items as CardData[];
	}
	function handleDndFinalize(e: CustomEvent<DndEvent>) {
		items = e.detail.items as CardData[];
	}
</script>

<CardSource></CardSource>

<div
	class="flex min-h-80 flex-row flex-wrap bg-amber-500"
	use:dndzone={{ items, flipDurationMs, dragDisabled: true }}
	onconsider={handleDndConsider}
	onfinalize={handleDndFinalize}
>
	{#each items as item (item.id)}
		<div animate:flip={{ duration: flipDurationMs }}>
			<Card data={item}></Card>
		</div>
	{/each}
</div>
