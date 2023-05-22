<script lang="ts">
	import type { GameState } from "$lib/GameState";
	import type { Vehicle } from "$lib/Vehicle";
	import { generateUid } from "$lib/common";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
    
    export let thisVehicle: Vehicle;

    let gameState: Writable<GameState> = getContext('gameState');

    $: purchase = () => {        
        if ($gameState.bank.balance < thisVehicle.purchasePrice) return; // Message "not enough money"
        thisVehicle.id = generateUid(); // Get a unique id for a new vehicle
        $gameState.vehicles.push({...thisVehicle});
        $gameState.bank.balance -= thisVehicle.purchasePrice;
        thisVehicle.purchasePrice *= 1.1; // Add 10% to the price each time a new vehicle is purchased
    }

</script>

<button on:click={purchase} disabled={$gameState.bank.balance < thisVehicle.purchasePrice} class="
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
    disabled:opacity-50
    disabled:cursor-not-allowed
">
    <img src={thisVehicle.imageUrl} alt={thisVehicle.constructor.name} class="
        h-16
    " />

    <div class="
        flex
        flex-col
        py-2
    ">
        <div class="
            flex
            items-center
            gap-2
        ">
            <span class="
                text-white
                font-black
                text-2xl
                drop-shadow
            ">{thisVehicle.constructor.name}</span>

            <span class="
                font-bold
            ">{"£" + new Intl.NumberFormat('en-GB').format(thisVehicle.purchasePrice)}</span>
        </div>

        <span class="
            text-xs
            text-left
            leading-none
        ">{thisVehicle.description} Collects up to {thisVehicle.capacity} passengers per second.</span>
    
    </div>
</button>