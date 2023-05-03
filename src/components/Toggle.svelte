<script lang="ts">
    export let label = "";
    export let checked = false;
    export let size = 1;
</script>

<div class="
    flex
    items-center
    justify-center
    select-none
">
    <input
        type="checkbox"
        bind:checked
        id={label}
        class="
            h-[{size}rem]
            w-[{size}rem]
            mr-[0.2rem]
            cursor-pointer
        "
    />

    <label
        for={label}
        class="
            leading-none
            cursor-pointer
        "
    >{label}</label>
</div>