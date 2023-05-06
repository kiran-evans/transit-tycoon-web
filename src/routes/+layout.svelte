<script lang="ts">
	import { browser } from "$app/environment";
	import { writable } from "svelte/store";
	import "../app.css";
	import Button from "../components/Button.svelte";
	import Toggle from "../components/Toggle.svelte";
    
let checked = writable(false);

$: if (browser) { $checked ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark') };

</script>

<div class="
    bg-blue-100
    text-blue-900

    dark:bg-blue-900
    dark:text-blue-100

    h-screen
    flex
    flex-col
">

<header class="
    flex
    align-center
    justify-between
    flex-[1]
    p-2
    border-b-2

    border-blue-900
    dark:border-blue-100
">

    <Button>Login</Button>

    <h1 class="
        flex
        items-center
        text-3xl
        font-black
        uppercase
    ">
        Transit Tycoon
    </h1>

    <Toggle label="Dark mode" bind:checked={$checked} size={1} />

</header>

<main class="
    flex-[25]
    overflow-y-auto
">

    <slot />

</main>


</div>