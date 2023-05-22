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
    pr-3
    flex
    items-center
    overflow-hidden
">
    <img src="bank.jpg" alt="Bank" class="
        h-20
        mr-3
    " />

    <div class="
        flex
        flex-col
        items-center
        gap-1
    ">
        <span class="
            text-white
            font-bold
            text-3xl
        ">{$gameState.bank.getBalanceString()}</span>

        <div class="
            {$gameState.getChange() >= 0 ? 'text-green-300 bg-green-900' : 'text-red-300 bg-red-900'}
            ml-2
            px-2
            py-[0.1em]
            rounded-sm
            flex
            items-center
        "><span class="
            drop-shadow-sm
        ">£{$gameState.getChange()} per second</span></div>
    </div>
</div>

<div class="
    flex
    justify-center
    mt-2
    font-bold
    text-white
    border-2
    rounded
    px-4
    py-2
">
    Ticket price: £{$gameState.bank.ticketPrice}
</div>