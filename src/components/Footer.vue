<script setup>
    import { SocialLinks } from './socials'
    import { ref } from 'vue'
    import logo from '../assets/thalrex-logo-transparent.png'

    const year = ref(new Date().getFullYear())
</script>

<template>
    <footer class="bg-dark mt-auto py-5 d-flex flex-column align-items-center">
        <div class="col-12 col-lg-2">
            <img :src="logo" class="img-fluid" alt="THALREX">
        </div>
        <SocialLinks />
        <div class="d-flex justify-content-center">
            <span class="mb-3 mb-md-0 text-muted">
                © {{ year }} THALREX
            </span>
        </div>
    </footer>
</template>