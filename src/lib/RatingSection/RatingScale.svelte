<script lang="ts">
	import type { Rating } from '$src/types/types';

	export let ratingData: Rating;

	const RATING_NUMBERS = [1, 2, 3, 4, 5];
</script>

{ratingData.criterion}

<div class="flex mb-2">
	{#each RATING_NUMBERS as ratingNumber}
		{@const isSelected = ratingNumber === ratingData.rating}
		<div class="m-1 border border-black rounded-full px-2 py-0" class:bg-pink-400={isSelected}>
			{ratingNumber}
		</div>
	{/each}
</div>
