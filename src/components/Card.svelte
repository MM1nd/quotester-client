<script>
	import * as m from '$lib/paraglide/messages.js';
	let revealed = $state(false);
	let year = 1788;
	let txt =
		'Daher ist auch die Moral nicht eigentlich die Lehre, wie wir uns glücklich machen, sondern wie wir der Glückseligkeit würdig werden sollen.';
	let author = {
		name: 'Immanuel Kant',
		birth: 1784,
		death: 1804,
		url: 'https://en.wikipedia.org/wiki/Immanuel_Kant'
	};
	let source_url = 'http://www.korpora.org/kant/aa05/130.html';
</script>

<div
	class="m-3 flex h-72 w-72 flex-col justify-between rounded-md bg-amber-300 p-1.5 text-justify font-serif text-base"
>
	<div class="p-3 text-center text-2xl">
		{#if revealed}
			{year}
		{:else}
			{m.placeholder()}
		{/if}
	</div>

	<div class="line-clamp-5 rounded-md bg-amber-200 p-1.5">{txt}</div>

	<div class="p-3 text-right">
		<a class="underline" href={author.url}>
			{author.name} ({author.birth}-{author.death})
		</a><br />
		<a class="underline" href={source_url}>{m.source()}</a>
	</div>
</div>
