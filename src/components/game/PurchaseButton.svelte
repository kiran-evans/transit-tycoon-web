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
    border
    border-gray-100
    rounded
    shadow
    mb-2
    pr-2
    items-center
    flex-1
    bg-gradient-to-b
    from-gray-700
    to-gray-900
    hover:from-blue-700
    hover:to-blue-900
    relative
    overflow-hidden
">
    <img src={imgUrl} class="
        h-16
    " />

    <span class="
        text-white
        font-black
        text-2xl
        drop-shadow
    ">{thisVehicle.name}</span>

    <span class="
        font-bold
    ">{"£" + new Intl.NumberFormat('en-GB').format(thisVehicle.price)}</span>
</button>