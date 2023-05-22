<script lang="ts">
	import type { GameState } from "$lib/GameState";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import Column from "./common/Column.svelte";
	import Container from "./common/Container.svelte";
	import P from "./common/P.svelte";
	import Bank from "./game/Bank.svelte";
	import Clock from "./game/Clock.svelte";
	import NewsFeed from "./game/NewsFeed.svelte";
	import Store from "./game/Store.svelte";
	import Vehicles from "./game/Vehicles.svelte";
    
    let gameState: Writable<GameState> = getContext('gameState');

</script>

<div class="
    bg-black
    flex
    flex-1
    justify-between
    items-center
">
    <Container>
        <Clock />
    </Container>

    <Container>
        <P>Capacity: {$gameState.getTotalCapacity()}</P>
    </Container>

    <Container>
        <Bank />
    </Container>
</div>

<div class="
    bg-gray-700
    flex
    flex-[8]
">

    <Column title="News">
        <NewsFeed />
    </Column>

    <Column title="Garage">
        <Vehicles />
    </Column>

    <Column title="Store">
        <Store />
    </Column>

</div>