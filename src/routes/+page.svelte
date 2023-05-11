<script>
	import ContextProvider from "../components/ContextProvider.svelte";
	import Game from "../components/Game.svelte";

</script>

<!-- Render conditionally depending on auth state -->
<ContextProvider>
    <Game />
</ContextProvider>