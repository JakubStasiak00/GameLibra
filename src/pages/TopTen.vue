<template>
  <div v-for="game in currentGames" :key="game">
    {{game.title}}
  </div>
</template>

<script setup> 
import { useGameStore } from 'src/stores/gameStore';
import { ref } from 'vue';
import { onBeforeMount } from 'vue';

const gameStore = useGameStore()

const currentGames = ref([])

onBeforeMount(async () => {
  await gameStore.getLibrary()
  currentGames.value = gameStore.library
})
</script>