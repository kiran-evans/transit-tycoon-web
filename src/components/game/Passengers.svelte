<script lang="ts">
	import type { GameState } from "$lib/GameState";
	import type { Passenger } from "$lib/Passenger";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

    let gameState: Writable<GameState> = getContext('gameState');

    const handleClick = (e: MouseEvent, p: Passenger) => {
        (e.target as HTMLElement).remove();
        $gameState.collectPassenger(p);
    }
    
</script>

<span class="
">Attractiveness: {$gameState.attractiveness}</span>
<br />
<span class="
">Click a passenger to collect them.</span>

<div class="
    flex-1
    flex
    flex-wrap
    gap-1
    justify-between
    border
    rounded
    overflow-auto
    max-h-full
">
    {#each $gameState.passengers as p}
        <button on:click={(e) => handleClick(e, p)} class="
        ">
            <img src="passenger.png" alt="Passenger" />
        </button>
    {/each}
</div>