<script lang="ts">
	import { Bus, Train, Tram, Trolleybus } from "$lib/Vehicle";
	import PurchaseButton from "./PurchaseButton.svelte";
</script>

<div class="
    flex
    flex-col
">
    <PurchaseButton thisVehicle={new Bus()} />
    <PurchaseButton thisVehicle={new Trolleybus()} />
    <PurchaseButton thisVehicle={new Tram()} />
    <PurchaseButton thisVehicle={new Train()} />
</div>