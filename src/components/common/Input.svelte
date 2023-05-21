<script lang="ts">
    export let id: string;
    export let value: any;
    export let type: string;
    export let placeholder: any = "";
    export let min = 0;
    export let max = 0;

    const handleChange = (e: any) => {
        value = e.target.value;
    }
</script>

<input id={id} value={value} on:change={handleChange} type={type} placeholder={placeholder} min={min} max={max} class="
    text-white
    py-1
    px-2
    rounded
    bg-gray-900
    hover:bg-gray-600
    border
" />