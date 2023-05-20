<script lang="ts">
	import "../app.css";

</script>

<div class="
    bg-blue-900
    text-blue-300

    h-screen
    flex
    flex-col
">

<header class="
    flex
    align-center
    justify-center
    flex-[1]
    p-2
    border-b-2
    border-blue-300
">

    <h1 class="
        flex
        items-center
        text-xl
        font-black
        uppercase
    ">
        Transit Tycoon
    </h1>

</header>

<main class="
    flex-[30]
    overflow-y-auto
">

    <slot />

</main>


</div>