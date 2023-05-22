<script lang="ts">
	import type { GameState } from "$lib/GameState";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

    let gameState: Writable<GameState> = getContext('gameState');
    
</script>

<div class="
    flex-1
    flex
    border
    rounded
">
    {#each $gameState.passengers as p}
        <div class="
        ">
            <img src="passenger.png" alt="Passenger" />
        </div>
    {/each}
</div>