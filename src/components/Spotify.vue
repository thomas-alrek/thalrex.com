<script setup>
    import { ref, watchEffect } from 'vue'

    const container = ref(null)

    const props = defineProps({
        src: {
            type: String,
            required: true
        },

        width: {
            type: String,
            default: '100%'
        },

        height: {
            type: [String, null],
            default: null
        },
    })

    window.onSpotifyIframeApiReady = IFrameAPI => {
        const element = document.createElement('div')
        container.value.appendChild(element)
    
        const options = {
            uri: props.src,
            width: props.width,
            height: props.height,
        }

        IFrameAPI.createController(element, options, () => {})
    }
</script>

<template>
    <div ref="container">

    </div>
</template>