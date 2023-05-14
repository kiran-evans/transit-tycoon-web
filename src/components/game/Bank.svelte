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
">
    <span class="
        text-white
        font-bold
        text-xl
    ">{$gameState.bank.getBalanceString()}</span>

    <span class="
        {$gameState.bank.in >= $gameState.bank.out ? 'text-green-300 bg-green-900' : 'text-red-300 bg-red-900'}
        ml-2
        px-1
        rounded-sm
        flex
        items-center
    ">{$gameState.bank.getChangeString()}</span>

</div>