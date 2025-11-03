<template>
    <section>
        <h3 data-testid="counter-value">Counter {{counter}}</h3>
        <h3 data-testid="square-value">Square {{square}}</h3>
       
        <div>
            <button data-testid="increment-button" class="btn" @click="counter++">Add +</button>
            <button data-testid="decrement-button" class="btn" @click="counter--">Subtract -</button>
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
