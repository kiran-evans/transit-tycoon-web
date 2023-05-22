<script lang="ts">
	import { GameState } from "$lib/GameState";
	import { onDestroy, onMount, setContext } from "svelte";
	import { writable } from "svelte/store";

    let gameState = writable(new GameState());

    setContext('gameState', gameState);
    
    let interval: NodeJS.Timeout;

    onMount(() => {
        interval = setInterval(() => {
            $gameState.doTick();
            $gameState = $gameState;
        }, 10);
    });

    onDestroy(() => {
        clearInterval(interval);
    })

</script>

<slot />