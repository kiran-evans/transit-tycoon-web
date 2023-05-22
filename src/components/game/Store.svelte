<script lang="ts">
	import type { GameState } from "$lib/GameState";
	import { Bus, Train, Tram, Trolleybus, type Vehicle } from "$lib/Vehicle";
	import { generateUid } from "$lib/common";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import PurchaseButton from "./PurchaseButton.svelte";

    let gameState: Writable<GameState> = getContext('gameState');

    const purchase = (thisVehicle: Vehicle) => {
        if ($gameState.bank.balance < thisVehicle.purchasePrice) return; // Message "not enough money"
        thisVehicle.id = generateUid(); // Get a unique id for a new vehicle
        $gameState.vehicles.push(thisVehicle);
        $gameState.bank.balance -= thisVehicle.purchasePrice;
    }
</script>

<div class="
    flex
    flex-col
">
    <PurchaseButton on:click={() => purchase(new Bus())} thisVehicle={new Bus()} />
    <PurchaseButton on:click={() => purchase(new Trolleybus())} thisVehicle={new Trolleybus()} />
    <PurchaseButton on:click={() => purchase(new Tram())} thisVehicle={new Tram()} />
    <PurchaseButton on:click={() => purchase(new Train())} thisVehicle={new Train()} />
</div>