import { defineStore } from "pinia";
import { ref } from "vue";



export const useGameStore = defineStore('game', () => {
    const library = ref(null)

    async function getLibrary(uid) {
        
    }
})