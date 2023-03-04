<template>
    <div class="position-relative ">
        <div class="Overlay">
            <slot name="background"></slot>
        </div>
        <div class="position-relative">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .Overlay {
        height: 100%;
        width: 100%;
        position: absolute;
    }
</style>