<script lang="ts">
	import type { GameState } from "$lib/GameState";
	import { Service } from "$lib/Service";
	import { Vehicle, VehicleType } from "$lib/Vehicle";
	import { generateUid } from "$lib/common";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import Column from "./common/Column.svelte";
	import Container from "./common/Container.svelte";
	import P from "./common/P.svelte";
	import Bank from "./game/Bank.svelte";
	import Clock from "./game/Clock.svelte";
	import NewsFeed from "./game/NewsFeed.svelte";
	import PurchaseButton from "./game/PurchaseButton.svelte";
    
    let gameState: Writable<GameState> = getContext('gameState');
    
    $: counter = setTimeout(() => {
            $gameState.time.doHour();
            $gameState = $gameState;
        }, 2500); // 2500ms - one "hour" of in-game time = one minute in real time

    clearTimeout(counter);

    $: getTotalCapacity = (): number => {
        let total = 0;
        $gameState.vehicles.forEach(v => {
            total += v.capacity;
        });
        return total;
    }

    $: createService = () => {
        $gameState.services.push(new Service(generateUid(), VehicleType.BUS, [], []));
        $gameState = $gameState;
    }

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
        <P>Riders: {$gameState.riders}</P>
        <P>Capacity: {getTotalCapacity()}</P>
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

    <Column title="Services">

    <button on:click={createService} class="
        border-2
        border-gray-100
        rounded
        shadow
        mb-2
        px-2
        bg-gradient-to-b
        from-gray-700
        to-gray-900
        hover:from-blue-700
        hover:to-blue-900
        text-white
        font-bold
        text-xl
        drop-shadow
    ">+ Create a new service</button>

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
            <PurchaseButton imgUrl="bus.jpg" thisVehicle={new Vehicle("", "Bus", VehicleType.BUS, 50, 500)} />
            <PurchaseButton imgUrl="bus.png" thisVehicle={new Vehicle("", "Trolleybus", VehicleType.TROLLEYBUS, 75, 700)} />
            <PurchaseButton imgUrl="bus.png" thisVehicle={new Vehicle("", "Tram", VehicleType.TRAM, 100, 900)} />
            <PurchaseButton imgUrl="bus.png" thisVehicle={new Vehicle("", "Train", VehicleType.TRAIN, 300, 2000)} />
        </div>
    </Column>

</div>