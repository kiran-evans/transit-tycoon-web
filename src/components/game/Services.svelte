<script lang="ts">
	import type { GameState } from "$lib/GameState";
	import { Service } from "$lib/Service";
	import { Vehicle, VehicleType } from "$lib/Vehicle";
	import { generateUid } from "$lib/common";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import P from "../common/P.svelte";

    
    let gameState: Writable<GameState> = getContext('gameState');
    let isCreatingService = false;
    let serviceName = "";
    let serviceType = VehicleType.BUS;

    $: createService = () => {
        isCreatingService = false;
        $gameState.services.push(new Service(generateUid(), serviceName, serviceType, [], []));
        $gameState = $gameState;
    }

    $: addVehicle = () => {
        $gameState.vehicles.push(new Vehicle("0", "Newbus", VehicleType.BUS, 50, 500));
        $gameState.services[0].vehicles.push("0");
    }
</script>

<button on:click={() => isCreatingService = true} class="
    border-2
    border-gray-100
    rounded
    shadow
    mb-2
    px-2
    bg-gradient-to-b
    from-gray-700
    to-gray-900
    hover:from-blue-700
    hover:to-blue-900
    text-white
    font-bold
    text-xl
    drop-shadow
">+ Create a new service</button>

<!-- New service form -->
{#if isCreatingService}
    <div class="
        absolute
        w-screen
        h-screen
        bg-black
        bg-opacity-80
        inset-0
        z-20
        flex
        items-center
        justify-center
    ">
        <div class="
            bg-gray-900
            border-2
            rounded
            px-6
            py-4
            shadow
            flex
            flex-col
        ">
            <h1 class="
                text-white
                font-bold
                uppercase
                mb-2
            ">Create a new service</h1>

            <input placeholder="Name" type="text" bind:value={serviceName} class="
                text-white
                py-1
                px-2
                rounded
                bg-gray-900
                hover:bg-gray-600
                border
            " />

            <button type="submit" on:click={createService} class="
                mt-2
                border-2
                self-center
                px-2
                py-1
                rounded
                text-white
                font-bold
            ">Create</button>

        </div>
    
    </div>
{/if}

{#each $gameState.services as service}
    <div class="
        border
        rounded
        flex
        flex-col
        items-start
        px-2
        py-2
        bg-gray-900
    ">
        <h2 class="
            text-white
            font-bold
        ">{service.name} ({VehicleType[service.type]} service)</h2>

        <P>Vehicles on this service: {service.vehicles.length}</P>

        <button on:click={addVehicle}>Add vehicle</button>
    </div>
{/each}