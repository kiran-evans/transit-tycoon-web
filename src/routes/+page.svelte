<script>
	import ContextProvider from "../components/ContextProvider.svelte";
	import Game from "../components/Game.svelte";

</script>

<!-- Render conditionally depending on auth state -->
<ContextProvider>
    <div class="
        h-full
        flex
        flex-col
    ">
        <Game />
    </div>
</ContextProvider>