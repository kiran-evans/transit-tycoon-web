<script lang="ts">
	export let imgUrl: string;
    export let label: string;
    export let price: number;
</script>

<button class="
    flex
    gap-2
    border-2
    border-blue-900
    dark:border-blue-200
    rounded
    pr-2
    py-2
    font-bold
    my-1
    flex-1
">
    <span><img src={imgUrl} /></span>
    <span>{label}</span>
    <span>£{price}</span>
</button>