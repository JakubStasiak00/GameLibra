import { defineStore } from "pinia";
import { ref } from "vue";
import { db } from "src/firebase/main";
import { collection, getDocs } from "@firebase/firestore";



export const useGameStore = defineStore('game', () => {
    const libraryRef = ref(collection(db, 'games'))
    const library = ref([])
    const error = ref('')

    async function getLibrary() {
        try {
            const querySnapshot = await getDocs(libraryRef.value)

            querySnapshot.forEach( doc => {
                library.value.push(doc.data())
            })

            console.log(library.value)

        } catch(err) {
            error.value = err.message
        }
    }

    return { library, error, getLibrary }
})
