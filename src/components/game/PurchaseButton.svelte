<script lang="ts">
	import type { Vehicle } from "$lib/Vehicle";
	import { createEventDispatcher } from "svelte";
    
    export let thisVehicle: Vehicle;

    const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch('click')} class="
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
    <img src={thisVehicle.imageUrl} alt={thisVehicle.constructor.name} class="
        h-16
    " />

    <span class="
        text-white
        font-black
        text-2xl
        drop-shadow
    ">{thisVehicle.constructor.name}</span>

    <span class="
        font-bold
    ">{"£" + new Intl.NumberFormat('en-GB').format(thisVehicle.price)}</span>
</button>