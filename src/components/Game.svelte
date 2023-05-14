<script lang="ts">
	import type { GameState } from "$lib/GameState";
	import { VehicleType } from "$lib/Vehicle";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import Column from "./common/Column.svelte";
	import Container from "./common/Container.svelte";
	import P from "./common/P.svelte";
	import Bank from "./game/Bank.svelte";
	import Clock from "./game/Clock.svelte";
	import PurchaseButton from "./game/PurchaseButton.svelte";
    
    let gameState: Writable<GameState> = getContext('gameState');
    
    $: setTimeout(() => {
        $gameState.time.doHour();
        $gameState = $gameState;
    }, 2500);
    

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
        <Bank />
    </Container>
</div>

<div class="
    bg-gray-900
    flex
    flex-[8]
">

    <Column title="Info">
        <P>Riders: {$gameState.riders}</P>
    </Column>

    <Column title="Services">
    {#each $gameState.services as service}
        <P>{service.id}</P>
    {/each}

    </Column>

    <Column title="Garage">
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

</div>