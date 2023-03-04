<script setup>
    import useEnv from '../../composables/env'
    import SocialLink from './SocialLink.vue'

    const { INSTAGRAM_URL } = useEnv()
</script>

<template>
    <SocialLink
        icon="instagram"
        :href="INSTAGRAM_URL"
    />
</template>