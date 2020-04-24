<script>
    import { writable } from "svelte/store";

    import Greeting from "./Greeting.svelte";
    import Form from "./Form.svelte";

    let name = writable("Stefan");

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello there!")
        }, 3000);
    });
</script>

<Form {name}/>
<Greeting {name}/>

{#if $name == "Stefan Novak"}
    You're the real Stefan!
{:else}
    You're a fake!
{/if}

{#await promise}
    Waiting...
{:then value}
    <h2>{value}</h2>
{/await}