<script setup>
    import useEnv from '../../composables/env'
    import SocialLink from './SocialLink.vue'
    
    const { FACEBOOK_URL } = useEnv()
</script>

<template>
    <SocialLink
        icon="facebook"
        :href="FACEBOOK_URL"
    />
</template>