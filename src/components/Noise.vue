<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        disabled: {
            type: Boolean,
            default: false
        },

        opacity: {
            type: Number,
            default: 1
        },

        interval: {
            type: Number,
            default: 0.2
        },
        
        animated: {
            type: Boolean,
            default: true
        }
    })

    const style = computed(() => {
        const styles = {
            opacity: props.opacity,
            'animation-duration': props.animated ? `${props.interval}s`: 'none',
            'animation-iteration-count': props.animated ? 'infinite' : 'none',
        }

        return Object.keys(styles).map(key => `${key}: ${styles[key]}`).join(';')
    })
</script>

<template>
    <div class="position-relative overflow-hidden">
        <div v-if="!disabled" class="Noise" :style="style"></div>
        <div class="position-relative">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .Noise {
        position: absolute;
        top: -100%;
        left: -100%;
        right: -100%;
        width: 400%;
        height: 400%;
        background: url('../assets/noise.png') repeat 0 0;
        background-repeat: repeat;
        animation-name: animation;
        visibility: visible;
        pointer-events: none;
        filter: brightness(10);
    }

    @keyframes animation {
        0% { transform: translate(0,0) }
        10% { transform: translate(-5%,-5%) }
        20% { transform: translate(-10%,5%) }
        30% { transform: translate(5%,-10%) }
        40% { transform: translate(-5%,15%) }
        50% { transform: translate(-10%,5%) }
        60% { transform: translate(15%,0) }
        70% { transform: translate(0,10%) }
        80% { transform: translate(-15%,0) }
        90% { transform: translate(10%,5%) }
        100% { transform: translate(5%,0) }
    }
</style>