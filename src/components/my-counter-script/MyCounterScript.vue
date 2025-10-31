<template>
    <section>
        <h3>Counter {{counter}}</h3>
        <h3>Square {{square}}</h3>
    </section>
</template>

<script lang="ts">
    import { ref, computed, defineComponent } from 'vue'
 
    export default defineComponent({
        props: {
            value: {
                type: Number,
                required: false,
                default: 1
            },
          
        },
        setup(props) {
            const counter = ref(props.value)
            const square = computed(() => counter.value * counter.value)

        return {counter, square}
        },
    })

</script>

