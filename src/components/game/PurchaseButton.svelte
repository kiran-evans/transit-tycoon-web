<script lang="ts">
	import type { State } from "$lib/GameState";
	import { Vehicle, VehicleType } from "$lib/Vehicle";
	import { generateUid } from "$lib/common";
	import { getContext } from "svelte";

	export let imgUrl: string;
    export let label: string;
    export let price: number;
    export let vehicleType: VehicleType;

    let { game, dispatch } = getContext('state') as State;

    const purchase = () => {
        game.subscribe(g => {
            let newGameState = {...g};
            newGameState.bank -= price;
            newGameState.vehicles.push(new Vehicle(generateUid(), label, vehicleType, 50));
            console.log(newGameState);
            dispatch('setGame', newGameState);
        });
    }
</script>

<button
    on:click={purchase}
    class="
    flex
    gap-2
    border-2
    border-blue-900
    dark:border-blue-200
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