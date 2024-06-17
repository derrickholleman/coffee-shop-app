<script>
	import CoffeeShop from '$lib/CoffeeShop/CoffeeShop.svelte';
	import { COFFEE_SHOPS } from '$src/mockData/coffeeShopMockData';
</script>

<h1 class="text-gray-800 text-center text-4xl font-semibold mb-8 mt-4">Coffee Finder</h1>

<div class="flex justify-center">
	{#each COFFEE_SHOPS as coffeeShop}
		<div class="m-4 max-w-[350px]">
			<CoffeeShop {coffeeShop} />
		</div>
	{/each}
</div>
