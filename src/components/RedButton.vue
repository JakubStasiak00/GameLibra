<template>
    <q-btn :label="btnText" color="red" :type="typer" />
</template>

<script setup>
    const props = defineProps({
        btnText: String,
        typer: String
    })
</script>

<style scoped>

</style>