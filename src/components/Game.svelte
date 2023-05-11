<script lang="ts">
	import type { State } from "$lib/GameState";
	import { Time } from "$lib/Time";
	import { VehicleType } from "$lib/Vehicle";
	import { getContext } from "svelte";
	import Column from "./common/Column.svelte";
	import Container from "./common/Container.svelte";
	import P from "./common/P.svelte";
	import PurchaseButton from "./game/PurchaseButton.svelte";
    
    let { game } = getContext('state') as State;
    let gameState = {} as any;
    $: game.subscribe(g => {
        gameState = { ...g };
    });

    let time = new Time();
    
    $: setTimeout(() => {
        time.doHour();
        time = time;
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
        <P>Bank: £{new Intl.NumberFormat('en-GB').format(gameState.bank)}</P>
        <P>Riders: {gameState.riders}</P>
        <P>Time: {time.getTimeString()}</P>
        <P>Day: {time.getDayString()}</P>
    </Column>

    <Column title="Services">
    {#each gameState.vehicles as vehicle}
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