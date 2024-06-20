<script lang="ts">
	import type { Rating } from '$src/types/types';
	import RatingScale from './RatingScale.svelte';

	export let derrickRatings: Rating[];
	export let stefRatings: Rating[];

	const RATING_NAME_CLASSES = 'font-semibold mb-4 text-[20px]';
</script>

<div class="grid grid-cols-2 gap-6">
	<!-- Derrick Ratings -->
	<div class="flex flex-col items-center">
		<div class={RATING_NAME_CLASSES}>Derrick</div>
		{#each derrickRatings as rating}
			<RatingScale ratingData={rating} />
		{/each}
	</div>

	<!-- Stef Ratings -->
	<div class="flex flex-col items-center">
		<div class={RATING_NAME_CLASSES}>Stef</div>
		{#each stefRatings as rating}
			<RatingScale ratingData={rating} />
		{/each}
	</div>
</div>
