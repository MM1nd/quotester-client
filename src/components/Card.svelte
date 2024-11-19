<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import type { CardData } from '../types/types.ts';

	let { data }: { data: CardData } = $props();
</script>

<div
	class="m-3 flex h-72 w-72 flex-col justify-between rounded-md bg-amber-300 p-1.5 text-justify font-serif text-base"
>
	<h2 class="p-3 text-center text-2xl">
		{#if data.reveal}
			{data.reveal.year}
		{:else}
			{m.placeholder()}
		{/if}
	</h2>
	<blockquote class="line-clamp-5 rounded-md bg-amber-200 p-1.5">{data.text}</blockquote>

	<div class="p-3 text-right">
		{#if data.reveal}
			<a class="underline" href={data.reveal.author.url}>
				{data.reveal.author.name} ({data.reveal.author.birth}-{data.reveal.author.death})
			</a><br />
			<a class="underline" href={data.reveal.source}>{m.source()}</a>
		{:else}
			<p>{m.place_instruction()}</p>
			<p>{m.source()}</p>
		{/if}
	</div>
</div>
