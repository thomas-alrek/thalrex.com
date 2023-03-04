<script setup>
    import useEnv from '../composables/env'
    import Icon from './Icon.vue'

    const { GOOGLE_FORM_URL, LINKTREE_URL, SHOPIFY_URL } = useEnv()
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-3 shadow-lg">
    <div class="container">
      
      <a class="navbar-brand text-uppercase fw-bold" href="/">
        THALREX
      </a>
      
      <button
        class="navbar-toggler text-light border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <Icon name="list" />
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link text-uppercase fw-bold" :href="SHOPIFY_URL" target="_blank">Merch</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-uppercase fw-bold" :href="LINKTREE_URL" target="_blank">Links</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>