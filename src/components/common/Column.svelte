<script lang="ts">
    export let title = "";
</script>

<div class="
    border-2
    flex-1
    p-4
    text-center
">
    <h2 class="
        text-xl
        font-black
        text-white
        uppercase
        italic
        mb-2
        drop-shadow
    ">{title}</h2>
    <slot />
</div>