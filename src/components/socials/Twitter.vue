<script setup>
    import useEnv from '../../composables/env'
    import SocialLink from './SocialLink.vue'

    const { TWITTER_URL } = useEnv()
</script>

<template>
    <SocialLink
        icon="twitter"
        :href="TWITTER_URL"
    />
</template>