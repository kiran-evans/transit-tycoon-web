<script lang="ts">
	import { GameState } from "$lib/GameState";
	import { setContext } from "svelte";
	import { writable } from "svelte/store";

    let gameState = writable(new GameState(5000));

    setContext('gameState', gameState);

</script>

<slot />