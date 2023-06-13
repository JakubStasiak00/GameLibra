import { defineStore } from "pinia";
import { ref } from "vue";
import { db } from "src/firebase/main";
import { collection, doc, getDoc, getDocs, increment, setDoc, updateDoc } from "@firebase/firestore";



export const useGameStore = defineStore('game', () => {
    const libraryRef = ref(collection(db, 'games'))
    const library = ref([])
    const error = ref('')

    async function getLibrary() {
        try {
            const querySnapshot = await getDocs(libraryRef.value)
            library.value = []

            querySnapshot.forEach(doc => {
                library.value.push(doc.data())
            })

            console.log(library.value)

        } catch (err) {
            error.value = err.message
        }
    }

    async function checkGameExistence(slug) {
        const gameDocRef = doc(libraryRef.value, slug)
        const gameSnapshot = await getDoc(gameDocRef)

        console.log(gameSnapshot.exists())
        return gameSnapshot.exists()
    }

    async function setGame(slug) {
        const docRef = doc(libraryRef.value, slug)

        if (!(await checkGameExistence(slug))) {
            await setDoc(docRef, {
                userCount: 1,
                ratingsGiven: 0,
                points: 0
            })
        } else {
           await updateDoc(docRef, {
            userCount: increment(1)
           })
        }
    }

    return { library, error, getLibrary, setGame }
})
