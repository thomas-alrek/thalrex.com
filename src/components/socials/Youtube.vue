<script setup>
    import useEnv from '../../composables/env'
    import SocialLink from './SocialLink.vue'

    const { YOUTUBE_URL } = useEnv()
</script>

<template>
    <SocialLink
        icon="youtube"
        :href="YOUTUBE_URL"
    />
</template>