<script lang="ts">
	import Column from "./common/Column.svelte";
	import Container from "./common/Container.svelte";
	import Bank from "./game/Bank.svelte";
	import Clock from "./game/Clock.svelte";
	import Garage from "./game/Garage.svelte";
	import NewsFeed from "./game/NewsFeed.svelte";
	import Passengers from "./game/Passengers.svelte";
	import Store from "./game/Store.svelte";

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
        <NewsFeed />
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

    <Column title="Passengers">
        <Passengers />
    </Column>

    <Column title="Garage">
        <Garage />
    </Column>

    <Column title="Store">
        <Store />
    </Column>

</div>