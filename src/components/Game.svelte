<script lang="ts">
	import type { GameState } from "$lib/GameState";
	import { VehicleType } from "$lib/Vehicle";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import Column from "./common/Column.svelte";
	import Container from "./common/Container.svelte";
	import P from "./common/P.svelte";
	import PurchaseButton from "./game/PurchaseButton.svelte";
    
    let gameState: Writable<GameState> = getContext('gameState');
    
    $: setTimeout(() => {
        $gameState.time.doHour();
        $gameState = $gameState;
    }, 2500);
    

</script>

<div class="
    bg-gray-200
    dark:bg-gray-900
    flex
    h-full
">

<Container className="
        flex
        w-full
">
    <Column title="Info">
        <P>Bank: £{new Intl.NumberFormat('en-GB').format($gameState.bank)}</P>
        <P>Riders: {$gameState.riders}</P>
        <P>Time: {$gameState.time.getTimeString()}</P>
        <P>Day: {$gameState.time.getDayString()}</P>
        <P>Week: {$gameState.time.getWeekString()}</P>
    </Column>

    <Column title="Services">
    {#each $gameState.vehicles as vehicle}
        <P>{vehicle.id}</P>
    {/each}
    
    </Column>

    <Column title="Store">
        <div class="
            flex
            flex-col
        ">
            <PurchaseButton imgUrl="bus.png" label="Bus" price={500} vehicleType={VehicleType.BUS} />
            <PurchaseButton imgUrl="bus.png" label="Trolleybus" price={1000} vehicleType={VehicleType.TROLLEYBUS} />
            <PurchaseButton imgUrl="bus.png" label="Tram" price={5000} vehicleType={VehicleType.TRAM} />
        </div>
    </Column>
</Container>

</div>