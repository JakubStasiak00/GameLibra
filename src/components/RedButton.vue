<template>
    <q-btn :label="btnText" color="red" />
</template>

<script setup>
    const props = defineProps({
        btnText: String,
    })
</script>

<style scoped>

</style>