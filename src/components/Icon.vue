<template>
    <i :class="classList">
        <slot></slot>
    </i>
</template>

<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        name: {
            type: String,
            required: true
        }
    })

    const classList = computed(() => [
        'bi',
        `bi-${props.name}`
    ])
</script>