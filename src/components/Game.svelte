<script lang="ts">
	import { Time } from "$lib/Time";
	import Column from "./common/Column.svelte";
	import Container from "./common/Container.svelte";
	import P from "./common/P.svelte";
	import PurchaseButton from "./game/PurchaseButton.svelte";

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
        <P>Riders:</P>
        <P>Time: {time.getTimeString()}</P>
        <P>Day: {time.getDayString()}</P>
    </Column>
    <Column title="Services">
    
    </Column>
    <Column title="Store">
        <div class="
            flex
            flex-col
        ">
            <PurchaseButton imgUrl="bus.png" label="Bus" price={500} />
            <PurchaseButton imgUrl="bus.png" label="Trolleybus" price={1000} />
            <PurchaseButton imgUrl="bus.png" label="Tram" price={5000} />
        </div>
    </Column>
</Container>

</div>