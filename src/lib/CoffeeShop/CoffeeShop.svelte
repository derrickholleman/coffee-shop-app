<script lang="ts">
	import type { CoffeeShop } from '$src/types/types';
	import RatingScale from '$lib/RatingSection/RatingSection.svelte';

	export let coffeeShop: CoffeeShop;

	const COFFEE_SHOP_INFO_CLASS = 'mb-4';
</script>

<div class="grid grid-cols-2">
	<div class="max-w-[350px]">
		<div class={COFFEE_SHOP_INFO_CLASS}>
			<span class="font-semibold">Name:</span>
			{coffeeShop.name}
		</div>
		<div class={COFFEE_SHOP_INFO_CLASS}>
			<span class="font-semibold">Address:</span>
			{coffeeShop.address}
		</div>
		<div class={COFFEE_SHOP_INFO_CLASS}>
			<span class="font-semibold">Open:</span>
			{coffeeShop.hours}
		</div>
		<div class={COFFEE_SHOP_INFO_CLASS}>
			<span class="font-semibold">Parking Type:</span>
			{coffeeShop.parking}
		</div>
		<div class={COFFEE_SHOP_INFO_CLASS}>
			<span class="font-semibold">Additional Comments:</span>
			{coffeeShop.additionalComments}
		</div>
	</div>

	<div class={COFFEE_SHOP_INFO_CLASS}>
		<RatingScale derrickRatings={coffeeShop.derrickRatings} stefRatings={coffeeShop.stefRatings} />
	</div>
</div>
