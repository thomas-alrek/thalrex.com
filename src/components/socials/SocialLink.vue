<script setup>
    import Icon from '../Icon.vue'

    const props = defineProps({
        icon: {
            type: String,
            required: true
        },

        href: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <li>
        <a
            class="text-light"
            target="_blank"
            :href="href"
        >
            <Icon :name="icon" />
        </a>
    </li>
</template>