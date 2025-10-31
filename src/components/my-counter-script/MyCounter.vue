<template>
    <section>
        <h3>Counter {{counter}}</h3>
        <h3>Square {{square}}</h3>
       
        <div>
            <button class="btn" @click="counter++">Add +</button>
            <button class="btn" @click="counter--">Subtract -</button>
        </div>

    </section> 
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/my-counter/useCounter';


    interface Props{
        value: number;
    }
    const props = defineProps<Props>()

    const { counter, square } = useCounter(props.value);
</script>
