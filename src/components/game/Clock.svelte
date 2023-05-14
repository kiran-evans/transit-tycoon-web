<script lang="ts">
	import type { GameState } from "$lib/GameState";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

    let gameState: Writable<GameState> = getContext('gameState');
</script>

<div class="
    border-2
    border-white
    rounded
    px-4
    py-2
    flex
    items-center
    gap-2
    font-mono
    text-white
">
    <span class="
        flex-1
    ">
        {$gameState.time.getTimeString()}
    </span>

    <span class="
    ">
        {$gameState.time.getDayString()}
    </span>

    <span class="
    ">
        {$gameState.time.getWeekString()}
    </span>
</div>