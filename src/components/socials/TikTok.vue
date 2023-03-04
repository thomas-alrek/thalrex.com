<script setup>
    import useEnv from '../../composables/env'
    import SocialLink from './SocialLink.vue'

    const { TIKTOK_URL } = useEnv()
</script>

<template>
    <SocialLink
        icon="tiktok"
        :href="TIKTOK_URL"
    />
</template>