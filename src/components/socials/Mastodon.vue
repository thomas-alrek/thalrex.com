<script setup>
    import useEnv from '../../composables/env'
    import SocialLink from './SocialLink.vue'

    const { MASTODON_URL } = useEnv()
</script>

<template>
    <SocialLink
        icon="mastodon"
        :href="MASTODON_URL"
    />
</template>