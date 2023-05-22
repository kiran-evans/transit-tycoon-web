<script lang="ts">
	import type { GameState } from "$lib/GameState";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

    let gameState: Writable<GameState> = getContext('gameState');

</script>


{#each Object.keys($gameState.getNumberOfVehicles()) as key}
    {#if $gameState.getNumberOfVehicles()[key] > 0}
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
            <span>You have {$gameState.getNumberOfVehicles()[key]} {key}</span>
        </div>
        
    {/if}
{/each}