<script lang="ts">
    export let title = "";
</script>

<div class="
    border-2
    flex-1
    p-4
">
    <h2 class="
        text-l
        font-bold
        underline
    ">{title}</h2>
    <slot />
</div>