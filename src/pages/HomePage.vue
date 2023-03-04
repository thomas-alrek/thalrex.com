<script setup>
    import useEnv from '../composables/env'

    import Spotify from '../components/Spotify.vue'
    import Noise from '../components/Noise.vue'
    import NewsletterSignup from '../components/NewsletterSignup.vue'

    import textLogo from '../assets/thalrex-text-logo-white.png'
    import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue'

    const { SPOTIFY_URL } = useEnv()
</script>

<template>
    <div class="HomePage">
        
        <div class="container pb-5">
            <ScrollParallax :speed="0.3" style="z-index: 1">
                <div class="pt-5 mb-5 row d-flex justify-content-center" style="z-index: 10">
                    <div class="col-12 col-lg-6">
                        <img :src="textLogo" class="img-fluid" alt="THALREX">
                    </div>
                </div>
            </ScrollParallax>
            
            <div class="row position-relative" style="z-index: 1000">
                <div class="col-12">
                    <Spotify class="mb-3" :src="SPOTIFY_URL" />
                </div>
            </div>
        </div>
        
        <NewsletterSignup />

    </div>
</template>

<style lang="scss" scoped>
    .HomePage {
        background-image: "../assets/bg.jpg";
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
</style>