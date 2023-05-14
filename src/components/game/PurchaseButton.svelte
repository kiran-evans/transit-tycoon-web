<script lang="ts">
	import type { GameState } from "$lib/GameState";
	import type { Vehicle } from "$lib/Vehicle";
	import { generateUid } from "$lib/common";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

	export let imgUrl: string;
    export let thisVehicle: Vehicle;

    let gameState: Writable<GameState> = getContext('gameState');

    $: purchase = () => {
        if ($gameState.bank.balance < thisVehicle.price) return; // Message "not enough money"
        thisVehicle.id = generateUid(); // Get a unique id for a new vehicle
        $gameState.vehicles.push(thisVehicle);
        $gameState.bank.balance -= thisVehicle.price;
    }
</script>

<button
    on:click={purchase}
    class="
    flex
    gap-2
    border-2
    border-blue-300
    rounded
    pr-2
    py-2
    font-bold
    my-1
    flex-1
">
    <span><img src={imgUrl} /></span>
    <span>{thisVehicle.name}</span>
    <span>£{thisVehicle.price}</span>
    <span>Capacity: {thisVehicle.capacity} riders</span>
</button>