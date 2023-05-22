<script lang="ts">
	import type { GameState } from "$lib/GameState";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import P from "../common/P.svelte";

    let gameState: Writable<GameState> = getContext('gameState');

</script>


{#each $gameState.vehicles as v}
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
        ">{v.name} ({v.constructor.name})</h2>

        <P>{v.id}</P>

        <P>Capacity: {v.capacity}</P>

        <P>{v.imageUrl}</P>
    </div>
{/each}