<script lang="ts">
	import { GameState } from "$lib/GameState";
	import { createEventDispatcher, setContext } from "svelte";
	import { writable } from "svelte/store";


    const dispatch = createEventDispatcher();

    let game = writable(new GameState(5000));

    setContext('state', {
        game: game,
        dispatch: dispatch
    });

    const setGame = (event: CustomEvent) => {
        setContext('state', {
            game: game.set(event.detail),
            dispatch: dispatch
        });
    }

</script>

<slot />