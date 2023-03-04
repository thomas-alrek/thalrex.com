<script setup>
    import { Facebook, Instagram, Mastodon, TikTok, Twitter, Youtube } from './index'
</script>

<template>
    <div class="mb-3 d-flex flex-column align-items-center">
        <div class="mb-2 text-uppercase">Follow me on Social Media</div>

        <ul class="nav list-unstyled d-flex gap-3">
            <Facebook />
            <Instagram />
            <Mastodon />
            <TikTok />
            <Twitter />
            <Youtube />
        </ul>
    </div>
</template>