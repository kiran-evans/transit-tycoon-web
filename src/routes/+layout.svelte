<script lang="ts">
	import { browser } from "$app/environment";
	import { writable } from "svelte/store";
	import "../app.css";
	import Toggle from "../components/Toggle.svelte";
    
let checked = writable(false);

$: if (browser) { $checked ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark') };

</script>

<div class="
    bg-blue-100
    text-black

    dark:bg-gray-900
    dark:text-gray-50

    h-screen
    flex
    flex-col
">

<header class="
    bg-blue-300
    text-900

    dark:bg-blue-900
    dark:text-blue-200

    flex
    align-center
    justify-center
    flex-[1]
    p-2
">

    <Toggle label="Dark mode" bind:checked={$checked} size={1} />

</header>

<main class="
    flex-[25]
    overflow-y-auto
">

    <slot />

</main>


</div>