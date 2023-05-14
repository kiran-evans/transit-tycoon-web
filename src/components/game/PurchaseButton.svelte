<script lang="ts">
	import type { GameState } from "$lib/GameState";
	import { Vehicle, VehicleType } from "$lib/Vehicle";
	import { generateUid } from "$lib/common";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

	export let imgUrl: string;
    export let label: string;
    export let price: number;
    export let vehicleType: VehicleType;

    let gameState: Writable<GameState> = getContext('gameState');

    $: purchase = () => {
        let newGameState = { ...$gameState };
        newGameState.bank.balance -= price;
        newGameState.vehicles.push(new Vehicle(generateUid(), label, vehicleType, 50));
        $gameState = newGameState;
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
    <span>{label}</span>
    <span>£{price}</span>
</button>